'use strict'

// Theme: Strings and its methods

/*
* Information:
*
* Arrays methods
*
* For iteration of Array we can use couple methods: for of cycle or forEach Array method
*
* Method indexOf lets get the number of index some element into the Array
*
* find helps to find element from callback function. This method return found property.
*
* Some and Every lets check all properties are equal
*
* Method filter lets filtering Array. This method returns subarray after callback function check all properties
*
* Method map update every elements of the initial Array and return new Array
*
* Methods reduce and reduceRight let accumulate all properties of the initial Array
*
* Revers method turned Array from end to start ----- !!!! this method is MUTED
* */

export default function () {

	// ! Distract of array properties
	const data = ['Alex', 33]
	const [ name, age ] = data
	console.log('name:', name, 'age:', age)


	// ! Iterations of Array
	// forOf
	const letters = [ 'A', 'B', 'C', 'D', 'E', 'F' ]
	console.log('For of method')
	for (const element of letters) {
		console.log('letter', element)
	}

	// forEach
	console.log('For each method')
	letters.forEach((el, idx) => console.log('in idx', idx, 'letter', el))



	// ! indexOf
	console.log('index of the C letter is', letters.indexOf('C')) // return -1 if there is no element into the Array
	console.log('index of the C letter is', letters.findIndex(el => el === 'C')) // return -1 if there is no element into the Array



	// ! only find element use Array method INCLUDES
	console.log(letters.includes('W'))
	console.log(letters.includes('E'))



	// ! Find and return found property
	const someArr = [
		{
			name: 'Max',
			age: 33
		},
		{
			name: 'Alex',
			age: 77
		}
	]
	console.log(someArr.find(({ age }) => age > 55))


	console.log(someArr.map(user => ({
		...user,
		name: user.name + ' from Moscow'
	})))


	// ! reduce and reduceRight
	const sumOfYears = someArr.reduce((accumulate, element) => accumulate + element.age, 0)
	console.log('Average of Year all users is', sumOfYears / someArr.length)


	// ! Reverse Array
	console.log(someArr.reverse())
}
