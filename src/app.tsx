import { style, media } from 'typestyle';
import * as React from 'react'
import * as ReactDOM from 'react-dom'

// const fontSize = (value: number | string) => {
// 	const valueStr = typeof value === 'string'
// 		? value
// 		: value + 'px'
// 	return {
// 		fontSize: valueStr
// 	}
// }

const className = style(
		//fontSize('2em'),
		{ 
			color: 'red',
			transition: 'font-size .2s', 
		},
		media({ minWidth: 500, maxWidth: 700 }, { fontSize: '30px' }),
		media({ minWidth: 701 }, { fontSize: '60px' }),
	)

ReactDOM.render(
	<div className={className}>
		React is working
	</div>,
	document.getElementById('root'))


// document.getElementById('root').innerHTML = `
// 	<div class="${className}">
// 		Hi there are
// 	</div>
// `
