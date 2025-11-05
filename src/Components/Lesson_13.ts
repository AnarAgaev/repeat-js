'use strict'

// Theme: Strings and its methods

/*
* Information:
*
*
* indexOf - return index of start of the searching substring
*
* 
* */

export default function () {

	const name = 'Max'
	const emptyString = ''
	const stringWithOneSpace = ' '

	console.log(`Length of string Max is ${name.length} letters.`)
	console.log([...name])

	// Changing register of string
	console.log(name.toLocaleLowerCase())
	console.log(name.toLocaleUpperCase())

	// Remove spaces from start and end of the string
	const stringWithSpaces = '   ' + name + '  '
	console.log(stringWithSpaces, stringWithSpaces.length)
	console.log(stringWithSpaces.trim(), stringWithSpaces.trim().length)


	// indexOf
	const patternSting = 'Try to find this substring at the its sting'
	console.log(patternSting.indexOf('substring'))
	console.log(patternSting.indexOf('bla bla bla') !== -1)


	// startsWith with and endsWith
	console.log(patternSting.startsWith('Try')) // true
	console.log(patternSting.endsWith('sting')) // true


	// Trimming of strings

	const str = 'JavaScript'
	console.log(str.substring(0, 4)) // Java
	console.log(str.slice(0, 4)) // Java
	console.log(str.slice(-6, -3)) // Scr

	// Replace substring into the string
	const message = 'I learn FrontEnd'
	console.log(message.replace('I learn', "I'm learning")) // For replacing all substring use replaceAll

	// Push string to Array
	const someStr = 'Hello JavaScript'
	console.log(someStr.split(' '))

}
