'use strict'

/*
* Themes:
*
* 1. event delegation
*
* 2. event.preventDefault() - use it method of the Event for remove default action on the html Element
*
* 3. Custom events
*
*
* */




// *** Event delegation
document.addEventListener('click', function(event) {
	const targetNode = (event?.target as HTMLElement)?.closest('.box')

	if (targetNode) {
		targetNode.classList.toggle('active')
	}
})


export default async function () {



	// *** Remove default action
	(event as Event).preventDefault()





	// *** Custom Events

	// 1. At first we needs create CustomEvent
	const someCustomEvent = new CustomEvent('custom_event_name', {
		bubbles: true,
		detail: {
			someData: 'we can give some data to the listener of the custom event at the detail property'
		}
	})

	// 2. Add listener of the custom event to the html elements needs reaction on custom event
	document.addEventListener('custom_event_name', () => {
		console.log('custom_event_name was fired')
	})

	// 3. On step three we needs dispatch our custom Event at the need moment
	const eventDispatcher = document.querySelector('.box')
	eventDispatcher?.addEventListener('click', () => {
		document.dispatchEvent(someCustomEvent)
	})


}