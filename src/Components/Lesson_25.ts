'use strict'

/*
* Themes: search elements by
*
* - getElementById
* - querySelector for single result
* - querySelectorAll for plural results
* - closest helps you find parent element by target selector
*
*
*
*
*
* */


export default async function () {

	// Searching element by Id
	const byId = document.getElementById('some_id')
	console.log('By id', byId)

	// Searching by css selector
	const byCssSelector = document.querySelector('.box-1 > .box-2 > *:not(div)')
	console.log('By css selector', byCssSelector)

	// Searching by css selector and get all nodes
	const byAllNodesCssSelector = document.querySelectorAll('li')
	console.log('Getting all elements by css selector', byAllNodesCssSelector)

	// Find parent by target selector
	const bodyParent = document.body.closest('html')
	console.log('bodyParent', bodyParent)

}