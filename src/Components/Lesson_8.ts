'use strict'

// Theme: functions

/*
* Information:
*
* We can create functions with three different syntaxes:
* 1. Function Declaration
* 2. Function Expression
* 3. Arrow Function
* 4. Method Definition
* 5. IIFE (Immediately Invoked Function Expression)
* */
export default function () {
    console.log('*** Functions ***')


	// 1. Function Declaration
	function greet(name: string, count = 3): string {

		const localName = name.toUpperCase();

		for (let i = 0; i < count; i++) {
			console.log(`Hello Mr. ${localName}!`)
		}

		// Function can return a value
		return `Printed name is, ${name}!`
	}

	console.log(greet('Anar'));

}
