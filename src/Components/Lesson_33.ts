'use strict'

/*
* Themes: Mouse events
*
* mousemove - cursor moving under the target html Node !!! -> fired on go the the child
* mouseover - cursor step on the target html Node !!! -> fired on go the the child
*
* mouseenter - cursor moving under the target html Node !!! -> NOT FIRED on go the the child
* mouseleave - cursor step on the target html Node !!! -> NOT FIRED on go the the child
*
* mousedown, mouseup, click - fired on this order
*
* dblclick - double click on target html Node
*
* contextmenu - fired after click on RIGHT MOUSE BUTTON
*
* */

export default async function () {

	const targetNode = document.querySelector('.box')

	// *** mousemove
	// targetNode?.addEventListener('mousemove', (e) => console.log)


	// *** mouseover
	// targetNode?.addEventListener('mouseover', console.log)


	// *** mouseout
	// targetNode?.addEventListener('mouseout', console.log)


	// *** mouseenter
	// targetNode?.addEventListener('mouseenter', console.log)


	// *** mouseleave
	// targetNode?.addEventListener('mouseleave', console.log)



	// *** mousedown, mouseup, click
	// targetNode?.addEventListener('mousedown', () => console.log('1. mousedown'))
	// targetNode?.addEventListener('mouseup', () => console.log('2. mouseup'))
	// targetNode?.addEventListener('click', () => console.log('3. click'))



	// *** double click on target Node
	targetNode?.addEventListener('dblclick', console.log)


	// *** right button click
	targetNode?.addEventListener('contextmenu', e => {
		e.preventDefault()
		console.log(e)
	})

}