import { findValue } from './findValue'
import { sliceFrom } from './sliceFrom'
import { CONVERSION_ARRAY, CURRENCY_ARRAY } from '../consts/constants'

export const findConversionValue = findValue(CONVERSION_ARRAY)
export const findCurrencyValue = findValue(CURRENCY_ARRAY)

export const sliceZeroToTwo = sliceFrom()(2)
