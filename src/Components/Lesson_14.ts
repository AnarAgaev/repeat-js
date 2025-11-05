'use strict'

// Theme: Strings and its methods

/*
* Information:
*
* Arrays
*
* Array methods: push, pop, shift, unshift, join
*
* Slice method - for get sub Array
*
* For coping Arrays use spread operator
*
* */

export default function () {

	const lettersArray = [ 'A', 'B', 'C']

	console.log('Initial Array is', lettersArray)

	// push - add some elements to the end of the Array
	// push method return new length of the worked Array
	console.log('After push two elements Array is', lettersArray.push('D', 'E'), lettersArray)


	// pop - remove one element from the end for the Array
	// pop method returns removed element
	console.log('After pop method', lettersArray.pop(), lettersArray)


	// unshift - add some elements to the start of the Array
	// unshift method returns new length of the worked array
	console.log('After unshift', lettersArray.unshift('F', 'Q', 'W'), lettersArray)


	// shift - remove element from the start of the Array
	// shift method returns removed element
	console.log('After shift', lettersArray.shift(), lettersArray)




	// JOIN - method for build Array elements to the single string
	console.log('After join array', lettersArray.join(', '))



	// Slice - method return sub Array from start index to end. Start and end indexes should git as parameters of the slice method.
	console.log('After slice method from 2 to 4 elements', lettersArray.slice(2, 4))



	// Copy of Arrays
	// Or we can use arrayOne.concat(arrayTwo, arrayThree, ...)
	const newLettersArray = [...lettersArray]
	console.log('Copied Array', newLettersArray)
	// Or we can use slice method without arguments
	const copyArr = newLettersArray.slice()
	console.log('copyArr', copyArr)
}
