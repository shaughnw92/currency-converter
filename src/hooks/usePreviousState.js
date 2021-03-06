import { useRef, useEffect } from 'react'

const usePreviousState = value => {
	const ref = useRef()

	useEffect(() => {
		ref.current = value
	}, [value, ref])

	return ref.current
}

export default usePreviousState
