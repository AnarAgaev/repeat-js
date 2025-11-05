// @ts-nocheck

"use strict"

/*
 * Themes:
 * https://www.npmjs.com/package/json-server
 *
 *
 * */

export default async function () {
	fetch("https://jsonplaceholder.typicode.com/todos/1")
		.then((response) => response.json())
		.then((json) => console.log(json))
}
