'use strict'

/*
* Themes: DOM and BOM
*
*
* */


export default async function () {
	console.log(window)

	// BOM (Browser object model)
	console.log('Browser information', window.navigator)
	console.log('Screen information', window.screen)
	console.log('URL information', window.location)
	console.log('Current history session information', window.history)


	// DOM (Document object model)
	console.log('Document object model', window.document)
	console.dir(window.document)
}
