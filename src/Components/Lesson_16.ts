'use strict'

// Theme: Strings and its methods

/*
* Information:
*
* Work with objects:
* Object.key - lets get all keys of object. This method global Object returns Array of all Object keys
* Object.values - lets get all values of object. This method global Object returns Array of all Values keys
* Object.entries Object as Array of Arrays
* Object.fromEntries - lets get Object from Array of Arrays
*
*
*
* Map is special collection
* Map.set - method lets add new element to the Map structure as Map.set(key, value)
* Map.get - this method lets get element by its key as Map.get(key)
* Map.has - lets check there is some key at the Map collection as Map.has(key)
* Map.delete - lets delete some property by its key ad Map.delete(key)
* Map.clear - remove all elements at Map stricture
*
*
*
* Set is special uniq collection
*
* */

export default function () {

	const user = {
		name: 'Max',
		age: 33,
		isDeveloper: true,
		city: 'New York'
	}

	// Getting keys of object
	console.log(Object.keys(user))
	// Getting values of object
	console.log(Object.values(user))
	// Getting all elements as Array of Arrays
	console.log(Object.entries(user))

	// Task
	const upperKeyObject = Object.fromEntries(
		Object.entries(user)
			.map(arr => [arr[0].toLocaleUpperCase(), arr[1]])
	)

	console.log('upperKeyObject', upperKeyObject)




	// *** Map collection
	const dataMap = new Map()
	dataMap.set(1, 'One as number')
	dataMap.set('1', 'One as string')
	dataMap.set('name', undefined)

	console.log(dataMap)
	console.log(dataMap.get('1'))
	console.log(dataMap.has('name'))

	dataMap.delete('name')
	console.log(dataMap)

	dataMap.clear()
	console.log('dataMap', dataMap)




	// *** Set collection
	const dataSet = new Set()
	dataSet.add(1)
	dataSet.add(2)
	dataSet.add(3)
	dataSet.add(2)
	dataSet.add(1)
	console.log('dataSet', dataSet)

	// Set collection has all properties as Map structure like delete, clear, size and ext.

}
