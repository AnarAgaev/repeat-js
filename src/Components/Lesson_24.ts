'use strict'

/*
* Themes: async or defer
*
* For work better use Elements not Nodes
* */


export default async function () {
	console.log(window.document)
	console.dir(document)

	// Getting parent
	console.log('Parent element')
	console.log(document.body.parentElement)

	// First child or last child
	const firstBodyChild = document.body.firstElementChild
	console.log('First child element', firstBodyChild)
	console.log('Last child element', document.body.lastElementChild)


	// Siblings
	console.log('Prev sibling', firstBodyChild?.previousElementSibling)
	console.log('Next sibling', firstBodyChild?.nextElementSibling)
}
