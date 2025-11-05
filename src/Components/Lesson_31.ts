'use strict'

/*
* Themes: browsers events
*	addEventListener - lets add some Event to the target Node. Use only link function.
*	removeEventListener - lets remove some Event from the target Node. Use only link function.
*
*
*
* event.target - first evented (clicked) html Node
* event.currentTarget - same evented html Node
*
*
* event.stopPropagation - lets stop bubbling
* event.preventDefault - remove default action fo the html Node
*
* */


const eventClickHandler = (event: Event) => {
	console.log('event', event)

	event.stopPropagation()
	event.preventDefault()
}

export default async function () {
	const targetNode = document.querySelector('.box')
	targetNode?.addEventListener('click', eventClickHandler)

	const eventRemover = document.querySelector('.first-class')
	eventRemover?.addEventListener('click', () => {
		targetNode?.removeEventListener('click', eventClickHandler)
	})
}