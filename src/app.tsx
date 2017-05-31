import { style } from 'typestyle';
import * as React from 'react'
import * as ReactDOM from 'react-dom'

const className = style({
	color: 'red'
})

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
