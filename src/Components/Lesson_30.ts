'use strict'

/*
* Themes: work with DOM Elements
*
* textContent - return inner HTML Element text
*
* innerHtml - lets add any html code to some Element
*
* document.createElement - lets make some html node Element
*
*
* Adding html Elements
* append - add to the End
* prepend - add to the start
* before - add before target
* after - add after target
* replaceWidth - for replacing target element to some new html node
* remove() method - for delete target element
* cloneNode(true) method - for copy target element. It needs true parameter for deep cloning, not only its body
*
*
*
* */


export default async function () {

	// Getting text inner some HTML Node Element
	const boxElement = document.querySelector('.box')
	console.log('Text content of the some HTML node Element', boxElement?.textContent)

	// Push some HTML code to the Element
	if (boxElement) {
		boxElement.innerHTML = `
			<p>Added text by innerHtml</p>
		`
	}

	// document.createElement - form make some html node
	const createElement = () => {
		const newElement = document.createElement('p')
		newElement.innerText = 'Most new text added by JS'
		newElement.classList.add('new-element')
		return newElement
	}


	// append --- Add to the end
	boxElement?.append(createElement())

	// prepend --- Add to the start
	boxElement?.prepend(createElement())

	// before --- Add before target
	boxElement?.before(createElement())

	// after --- Add after target
	boxElement?.after(createElement())

	// replaceWith --- replace target to some html node
	// boxElement?.replaceWith(createElement())

	// remove method --- for delete target element
	// boxElement?.remove()

}