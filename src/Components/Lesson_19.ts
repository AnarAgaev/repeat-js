'use strict'

/*
* Information: setTimeout and setInterval
*
* Save returned function values to the separated value and remove it used clearInterval and clearTimeout
*
* We can push other arguments to the timeout funcs after all args. From the 3th and other places
* */

const doSomething = (name: string, age: number) => {
	console.log(`Hello ${name}. Your age is ${age}`)
}

export default function () {
	const intervalId = setInterval(doSomething, 2000, 'Max', 33)
	clearInterval(intervalId)
}