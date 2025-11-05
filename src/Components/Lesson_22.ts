'use strict'

// import defFunc, { fn as notDefFunc } from './module.ts'
import * as customImports from './module.ts'

/*
* Themes: Modules
*
*
* */


export default async function () {
	// notDefFunc()
	// defFunc()

	console.log(customImports)
	console.log('1', customImports.a)
	console.log('2', customImports.b)
	console.log('3', customImports.c)

	customImports.default()
}
