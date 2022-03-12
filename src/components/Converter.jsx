import React, { useState, useEffect, Fragment } from 'react'
import Title from './Title'
import {
	findConversionValue,
	findCurrencyValue,
	sliceZeroToTwo,
} from '../utils/helpers'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CONVERSION_ARRAY } from '../consts/constants'
import { INPUT_PATTERN, NUMBER_KEYS } from '../consts/regex'
import { faUndo, faRedo } from '@fortawesome/free-solid-svg-icons'
import usePreviousState from '../hooks/usePreviousState'

const Converter = ({ convertFrom = 'pounds', convertTo = 'euros' }) => {
	const from = findConversionValue('name', convertFrom, 'symbol')
	const to = findConversionValue('name', convertTo, 'symbol')
	const [conversionSwap, setConversionSwap] = useState(false)
	const [initialValue, setInitialValue] = useState('')
	const [initialSelect, setInitialSelect] = useState(from)
	const [finalValue, setFinalValue] = useState('')
	const [finalSelect, setFinalSelect] = useState(to)
	const prevFinalSelect = usePreviousState(finalSelect)

	const current = findConversionValue('symbol', initialSelect, 'name')
	const next = findConversionValue('symbol', finalSelect, 'name')

	const acronym = findConversionValue('symbol', initialSelect, 'acronym')
	const finalAcronym = findConversionValue('symbol', finalSelect, 'acronym')
	const rate = findCurrencyValue('currency', acronym, finalAcronym)

	useEffect(() => {
		if (initialValue.length === 0) setFinalValue('')
		else {
			const total = initialValue * rate
			setFinalValue(sliceZeroToTwo(String(total), '.'))
		}
	}, [initialValue, rate])

	const handleKeyDown = e => {
		if (!NUMBER_KEYS.test(e.key) && e.key !== 'Backspace' && !e.ctrlKey)
			e.preventDefault()

		if (initialValue === '0' && e.key !== '.') setInitialValue('')
		const total = String(initialValue * rate)
		setFinalValue(sliceZeroToTwo(total, '.'))
	}

	const handleFinalSelect = e => {
		setFinalSelect(e.target.value)
		if (finalSelect !== prevFinalSelect) {
			const total = String(initialValue * rate)
			setFinalValue(sliceZeroToTwo(total, '.'))
		}
	}

	const handleSwap = () => {
		setConversionSwap(!conversionSwap)
		setInitialSelect(finalSelect)
		setFinalSelect(initialSelect)
	}

	return (
		<Fragment>
			<div className='text-container'>
				<Title
					initial={initialValue}
					current={current}
					final={finalValue}
					next={next}
					rate={rate}
				/>
			</div>
			<div className='value-container'>
				<div className='value value--from'>
					<input
						className='value__input value__number'
						placeholder={from}
						value={initialValue}
						pattern={INPUT_PATTERN}
						onKeyDown={handleKeyDown}
						type='text'
						onChange={e => setInitialValue(e.target.value)}
					/>
					<select
						className='value__input value__select'
						name='from'
						value={initialSelect}
						onChange={e => setInitialSelect(e.target.value)}
					>
						{CONVERSION_ARRAY.map(({ symbol }, ix) => (
							<option key={ix} value={symbol}>
								{symbol}
							</option>
						))}
					</select>
				</div>
				<div className='value value--to'>
					<input
						className='value__input value__number'
						placeholder={to}
						value={finalValue}
						pattern={INPUT_PATTERN}
						disabled
						type='text'
					/>
					<select
						className='value__input value__select'
						name='to'
						value={finalSelect}
						onChange={handleFinalSelect}
					>
						{CONVERSION_ARRAY.map(({ symbol }, ix) => (
							<option key={ix} value={symbol}>
								{symbol}
							</option>
						))}
					</select>
				</div>
			</div>
			<button className='button button--clear' onClick={handleSwap}>
				<FontAwesomeIcon size='xs' icon={conversionSwap ? faUndo : faRedo} />
			</button>
		</Fragment>
	)
}

export default Converter
