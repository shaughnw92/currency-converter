import React from 'react'
import classnames from 'classnames'

const Container = ({
	borderRadius,
	backgroundColor = 'white',
	children,
	className,
	padding = '20px',
}) => (
	<div
		className={classnames(className, 'container')}
		style={{ backgroundColor, borderRadius, padding }}
	>
		{children}
	</div>
)

export default Container
