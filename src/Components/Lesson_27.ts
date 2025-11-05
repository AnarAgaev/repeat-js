'use strict'

/*
* Themes: styles in JS
* .style property lets set some separated css value
*
* .style.cssText lets set some different propses.
* Attention: .cssText rewrites all css properties. For defend from this behavior use concat selector +=
*
*
* For get all actually css properties use function window.getComputedStyle
*
*
* for getting or setting html element classes use className or classList (add, remove, , toggle, contains)
*
*
* Important: .toggle method has second attribute. This attribute lets set or remove class from the state of the second boolean attribute
* const checkedProp = false
* .classList.toggle('custom-class', checkedProp)
*
*
* setProperty lets change css variable value
* htmlElement.style.setProperty('--border-color', 'blue')
*
* */


export default async function () {

	// All styles is in property .style of the some Node Element
	document.body.style.borderLeft = '3px solid blue'
	console.log(document.body.style.borderLeft)


	// Add some style propses
	document.body.style.cssText += `
		background-color: rgba(0,0,0,.17);
		border-right: 3px solid blue;
	`


	// Get all actually css properties
	const actuallyCssProps = window.getComputedStyle(document.body)
	console.log('Real height is', actuallyCssProps.height)


	// get css properties of pseudo elements
	console.log('body::after textDecoration is', window.getComputedStyle(document.body, '::after').textDecoration)


	// className and classList
	const element = document.body.querySelector('div div')
	console.log('element classes is', element?.className)
	console.log('element classes contains class custom-class', element?.classList.contains('custom-class'))



	// Second attribute of the .toggle
	const checkedProp = true
	document.body.classList.toggle('custom-body-class-from-the-second-toggle-attribute', checkedProp)


	// Change css variable property
	document.body.style.setProperty('--border-color', 'blue')
}