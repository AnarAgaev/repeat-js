'use strict'

// Branching operators or conditional operators

/* Information
*
* For branching Instructions of JS should use operators if, else, elseif
*
* like this
*
* if (some separate operator) {
*   ... true code
* } else if (some separate operator) {
*   ... else code
* } else {
*   ... total code
* }
*
* Instead branch operator we can use ternary operator SEPARATE ? ... : ...
*
*
* Logical operators are || adn &&
*
*
* Invert operator is ! let to get boolean value of some variable
* For getting boolean from any variable we can use couple !!
*
*
* Nullish operator is ??
* Nullish operator check left operand on null or undefined
* If left operant is null or undefined, Instruction goes later, then Nullish operator return left operator
*
*
* Optional chaining is ?.
* Optional chaining return false value is before operand is null or undefined them it's going later.
* */

export default function () {

    // Ternary operator
    console.log( true ? 'Hello true' : 'Hello false' )


    // Logical operator
    console.log(false || undefined) // undefined
    console.log(true && null) // null


    // Invert operator
    console.log('Invert operator', !!100)


    // Nullish operator
    const a = null
    const b = 100
    console.log('Nullish operator', a ?? b)


    // Optional chaining
    const someObject = {
        name: 'John',
        status: 'admin'
    }
    console.log(someObject?.year && paseInt(someObject.year))
}
