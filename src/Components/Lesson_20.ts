'use strict'

/*
* Information: catching Errors with try/catch/finally constructions
*
* Attention: try/catch don't fixed async code
*
* */


export default function () {
	try {
		// Some code with probably Error

		// const names = [ 'Alex', 'Simon', 'Lisa', 'Julia' ]
		const names = undefined

		names.forEach(name => console.log('Username is', name))

		console.log('Code after Error into the try/catch will not be work')
	} catch (error: Error) {
		console.error('All error message', error)
		console.log('Error name', error.name)
		console.log('Error message', error.message)
		console.log('Error stack', error.stack)
	} finally {
		console.log('This code will be start all times')
	}

	console.log('Some code after Error')
}