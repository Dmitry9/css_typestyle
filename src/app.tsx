import { style } from 'typestyle';
const className = style({
	color: 'darkorange'
})
document.getElementById('root').innerHTML = `
	<div class="${className}">
		Hi there are
	</div>
`
