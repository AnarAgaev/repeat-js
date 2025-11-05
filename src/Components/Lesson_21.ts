'use strict'

/*
* Information: Promise
*
*
* */


export default async function () {

	const now = new Date().getTime()
	console.log(now)

	const customPromise = new Promise((resolve, reject) => {
		console.log('My custom Promise starts work')

		setTimeout(() => {
			if (Math.random() > 0.5) {
				resolve('Promise is working write')
			} else {
				reject('Promise is finished with Error')
			}
		}, 3000)

	})

	customPromise
		.then(msg => console.log(msg))
		.catch(msg => console.log(msg))
}