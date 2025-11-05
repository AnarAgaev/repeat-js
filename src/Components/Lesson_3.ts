'use strict'

// JavaScript Types

/* Information
 *
 * Data types of JavaScript
 *
 * At JS there are eight types.
 * These are:
 * 1. string;
 * 2. number;
 * 3. boolean;
 * 4. BigInt;
 * 5. Symbol;
 * 6. undefined;
 * 7. null.
 *
 * And eight special type is Object
 * Object is all complex types as array, object, map, set and other
 *
 * */

export default function () {

    // Type sting. For declaration of the string we can use '', "" or `` (backticks)
    const singleQuotesString = 'string'
    const doubleQuotesString = "string"

    const someVariable = 'some variable sting'
    const backticksString = `string ${someVariable}`

    // Into the construction ${} we cna use any Instructions as `${3 + 4}`
    const firstNum = 2
    const secondNum = 3
    const sumString = `
        Sum of couple two number two and three is
        ${firstNum + secondNum}
    ` // print sum as 5
    console.log(sumString)


    // Number
    const strangerNumber = 1_000_000
    console.log(strangerNumber + 1)


    // For checking type of the variable we should use operator typeof
    const someString = 'some string'
    console.log(typeof someString) // string
    const someArray = someString.split(someString)
    console.log(typeof someArray) // object

    console.log('*** Types ***')
    console.log(typeof '') // string
    console.log(typeof 100) // number
    console.log(typeof 1n) // bigint
    console.log(typeof true) // boolean
    console.log(typeof null) // !!! object
    console.log(typeof undefined) // undefined
    console.log(typeof {}) // object
    console.log(typeof []) // object

    // Type conversion
    const age = 33
    console.log('*** Type conversion ***')
    console.log(age, typeof age)
    console.log(String(age), typeof String(age))

}