'use strict'

/*
* Themes: keyboard Events
*
* keydown - this event fires when some key of the keyboard was down
* keyup - this event fires when some key of the keyboard was up
*
*    
* Attention: don't use key property from Event object. It will change after keyboard language changed.
*    
*
* cut - fired after user cut some from web page
*
* copy - fired after user copy some from web page
*
* paste - fired after user cut paste from web page
*
*
*
*
* */

const getCutCopyPasteData = async () => {
	const data = await navigator.clipboard.readText()
	console.log('data', data)
}

export default async function () {

	// document.addEventListener('keydown', console.log)
	// document.addEventListener('keyup', console.log)




	// cut
	document.addEventListener('cut', (event) => {
		console.log('cut event', event)

		getCutCopyPasteData()

		// navigator.clipboard.readText().then(clipboardText => (
		// 	console.log('clipboardText', clipboardText)
		// ))
	})


	// copy
	document.addEventListener('copy', (event) => {
		console.log('copy event', event)

		getCutCopyPasteData()

		// navigator.clipboard.readText().then(clipboardText => (
		// 	console.log('clipboardText', clipboardText)
		// ))
	})


	// paste
	document.addEventListener('past', (event) => {
		console.log('pasts event', event)

		getCutCopyPasteData()

		// navigator.clipboard.readText().then(clipboardText => (
		// 	console.log('clipboardText', clipboardText)
		// ))
	})


}