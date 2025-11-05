'use strict'

/*
* Themes: formData - getting data from any html Forms
*
*
* append - add any property to the form's data
*
* get - getting any property from from's data
*
* has: true/false - check any property into the form's data
*
* delete - remove some property from from's data
*
* */


export default async function () {
	const formElement = document.getElementById('customForm') as HTMLFormElement

	if (!formElement) return

	formElement?.addEventListener('submit', e => {
		e.preventDefault()

		const formData = new FormData(formElement)

		formData.append('myCustomProperty', 'bla-bla-bla')

		console.log(Object.fromEntries(formData))

		const userName = formData.get('username')
		console.log('userName is', userName)

		formData.delete('username')
		console.log('Form has thees properties', Object.fromEntries(formData))



	})


}