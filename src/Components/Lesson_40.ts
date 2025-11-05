// @ts-nocheck

"use strict"

/*
 * Themes: cookie, localStorage, sessionStorage
 *
 * document.cookie = "variable-name=some-value"
 *
 * localStorage and sessionStorage
 * .setItem('variable_name', 'variable_value')
 * .getItem('variable_name)
 * .removeItem('variable_name)
 * .clear() - remove all data from local or sessionStorage
 * 
 * 
 * */

export default async function () {

	// Cookies
	document.cookie = "variable-name=some-value"
	document.cookie = "username=Max"
	console.log(document.cookie)



	// localStorage and sessionStorage
	localStorage.setItem('username', 'Alex')
	console.log(localStorage.getItem('username'))

	localStorage.removeItem('username')
	console.log(localStorage.getItem('username'))

	localStorage.clear()

	console.log(localStorage)
}
