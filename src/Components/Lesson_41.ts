// @ts-nocheck

"use strict"

/*
 * Themes: locationAPI historyAPI
 *
 *
 * ====== Location
 * window.location.assign('./some-page.html') - redirection to some page and ADD sign to the browser history
 * window.location.replace('./some-page.html') - redirection to some page and NO ADD sign to the browser history
 * window.location.href = './some-page.html' - redirection to some page and ADD sign to the browser history
 *
 *
 * ====== History
 * window.history.back() - go to preview browser page
 * window.history.forward() - go to next browser page
 * window.history.go(-N) - go to prev or next browser page by N steps
 *
 *
 * */

export default async function () {
	// ! window.location
	console.log(window.location)

	setTimeout(() => {
		// window.location.assign('./some-page.html')
		// window.location.replace('./some-page.html')
		// window.location.href = './some-page.html'
	}, (3000));


	// ! window.history
	console.log(window.history)

	const nextButton = document.getElementById('nextBtn')
	nextButton?.addEventListener('click', window.history.forward)

	const prevButton = document.getElementById('prevBtn')
	prevButton?.addEventListener('click', window.history.prev)

	setTimeout(() => window.history.go(-7), (3000))


}
