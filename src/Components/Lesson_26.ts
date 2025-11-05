'use strict'

/*
* Themes: html element attributes
*
* All html attributes in JS code looks like CamelCase
*
* - getAttribute lets get any attributes
* - setAttribute lets stand some value to the any attributes
* - removeAttribute lest remove any attribute
* - hasAttributes lets check there's some attributes
*
*
* - any Element has property attributes with all attribute collection names
*
*
* - for getting some data attribute we can use dataset method of Element
*
*
* */


export default async function () {
	// get value any attribute
	const attributeValue = document.body.getAttribute('class')
	console.log('attributeValue is', attributeValue)

	// set new value to any attributes
	document.body.setAttribute('class', 'new-custom-body-attribute')
	console.log('new-custom-body-attribute is', document.body.getAttribute('class'))


	// remove any attribute
	document.body.removeAttribute('class')
	console.log('removedAttribute', document.body.getAttribute('class'))


	// check has Element some attributes or not
	console.log(document.body.hasAttribute('class'))


	// all Attributes
	console.log('all Attributes (attributes)', document.body.attributes)



	// getting data Attributes
	console.log('data attributes', document.body.dataset)


	// we can save JSON string in data attributes
	const attributeDataAsJson = JSON.parse(document.body.dataset.json as string)
	console.log('attributeDataAsJson', attributeDataAsJson)
}