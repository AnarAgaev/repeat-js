'use strict'

/*
* Themes:
*
* */


export default async function () {

	const boxElement = document.querySelector('.box')

	console.log('Total with is', boxElement.offsetWidth)
	console.log('Total height is', boxElement.offsetHeight)

	console.log('Left border width is', boxElement?.clientLeft)
	console.log('Top border width is', boxElement?.clientTop)


	console.log('Element with without border size is', boxElement?.clientWidth)
	console.log('Element height without border size is', boxElement?.clientHeight)


	console.log('Width of the Element without border width but plus scroll area', boxElement?.scrollWidth)
	console.log('Height of the Element without border width but plus scroll area', boxElement?.scrollHeight)



	// Coordinates
	const boxElementRectParams = boxElement?.getBoundingClientRect()
	console.log('boxElementRectParams', boxElementRectParams)

}