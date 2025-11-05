'use strict'

/*
* Themes:
*
* document.documentElement.clientWidth - Window width without scrollbar
* document.documentElement.clientHeight - Window height without scrollbar
*
* document.documentElement.scrollWidth - Page width without scrollbar
* document.documentElement.scrollHeight - Page height without scrollbar
*
*
* window.scroll({
*     top: 200,
*     behavior: 'smooth'
* })
*
* window.scroll --- scrolling to position
* window.scrollBy --- scrolling push pixels from current position
* HtmlElement.scrollIntoView --- scrolling as for view HtmlElement in window
*
* */


export default async function () {

	// Window width and height
	const htmlElement = document.documentElement
	console.log("Window's width by HTML", htmlElement.clientWidth)
	console.log("Window's height by HTML", htmlElement.clientHeight)
	// // console.log("Window's width by Window", window.innerWidth)
	// // console.log("Window's height by Window", window.innerHeight)


	// Summary window with and summary window height
	console.log("Page's width by HTML", htmlElement.scrollWidth)
	console.log("Page's height by HTML", htmlElement.scrollHeight)


	// Scroll positions
	console.log('Page scroll positions are:', window.scrollX, window.scrollY)


	// Show some element on screen
	const targetScrollHtmlElement = document.getElementById('targetScrollHtmlElement')
	targetScrollHtmlElement?.scrollIntoView({
		behavior: 'smooth'
	})


}