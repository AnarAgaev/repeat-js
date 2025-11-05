'use strict'

// Mathematics

/* Information
*
* JS uses tradition math operators as +, -, * and /
*
* And it has operator 2 ** 10 - 2 to the power of 10
*
* We can check even or add with operator % as 5 % 2 = 1
*
*
* Binary operator needs two operands and unary operator needs only single
*
*
* Unary operators are: -, +, !
*
*
* Increment and decrement operators are ++ and --
* There are two forms of inc and dec operators. Prev and Post forms.
* --10 or ++10 - preview form
* 10-- or 10++ - post form
* Inc and Dec operators work with numbers and strings
*
*
* Comparison operators are <, >, <= and >= There result will be Boolean, true or false
*
*
* Equality operators are == or === and != or !==
* */

export default function() {
    console.log(2 ** 2) // 4 --- power of
    console.log(5 % 2) // 1 --- even or odd

    // Unary operator +
    console.log(typeof +'110') // number
    console.log( +'3' + +'5')

    console.log(1 + -2 - 3 * +'4' / 5 ** 2)
}