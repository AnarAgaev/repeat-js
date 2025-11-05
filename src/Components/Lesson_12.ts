'use strict'

// Theme: Number and other primitives methods

/*
* Information:
*
* toFixed() - Round number to some decimal places after comma. Star after comma.
*
* toPrecision() - Round number to some decimal places from start of the number.
*
* toString() - Reformating number to string
*
*
*
*
* Math
*
* Math.random() - getting number from 0 to 1
*
* parseInt - for getting number from sting
* parseFloat - for getting number from sting
*
* */

export default function () {

	const price = 99.777

	// *** Numbers ***

	// toFixed
	console.log('Round price to 0 decimal places after comma', price.toFixed());
	console.log('Round price to 1 decimal places after comma', price.toFixed(1));

	// toPrecision
	console.log('Round price to 4 all numbers', price.toPrecision(4))

	// toString
	console.log(`Format ${typeof price} to ${typeof price.toString()}`)



	// *** Math ***

	// Math.random()
	console.log(Math.random())

	// parseInt
	console.log(parseInt(price.toString()))

	// parseFloat
	console.log(parseFloat(price.toString()))


}
