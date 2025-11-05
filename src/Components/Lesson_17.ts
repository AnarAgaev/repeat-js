'use strict'

// Theme: Strings and its methods

/*
* Information: JSON format
*
* JSON string can't hav Undefined type and Functions!!!
* JSON string should use only cupule coma
*
* */

const user = {
	"name": "Max",
	"lastName": null,
	"age": 33,
	"city": "New York",
	"address": {
		"street": "5th Avenue",
		"zipcode": 300077
	},
	"todos": ["sleep", "eat", "work", "train", "learn"],
	"isDeveloper": true
}

export default function () {
	const jsonAsString = JSON.stringify(user)
	console.log('jsonAsString', jsonAsString)

	const objFromJsonString = JSON.parse(jsonAsString)
	console.log('objFromJsonString', objFromJsonString)
}
