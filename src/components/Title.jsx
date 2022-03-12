import React from 'react'
import { singular } from '../utils/singular'
import { defaultValue } from '../utils/defaultValue'
import { sliceZeroToTwo } from '../utils/helpers'

const Title = ({ initial, current, final, next, rate }) => (
	<h2 className='title'>
		<span className='title__span'>
			{defaultValue(initial)} {singular(initial, current)} equals
		</span>
		{final.length
			? sliceZeroToTwo(String(final), '.')
			: sliceZeroToTwo(String(defaultValue(initial) * rate), '.')}{' '}
		{singular(final, next)}
	</h2>
)

export default Title
