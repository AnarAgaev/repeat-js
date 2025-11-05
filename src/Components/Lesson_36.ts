'use strict'

/*
* Themes: Forms
*
* document.forms.customForm - lets get form with id = customForm
*
*
* customForm.elements - collection of the all form child controllers
*
* customForm.elements.ELEMENT_NAME - for get some html Element into the form by name attribute value
*
* form="parent_form_id" - use attribute form on any controllers for improve this element to the id's form
*
* */


export default async function () {

	// document.from
	const forms = document.forms
	const customForm = document.forms.customForm


	console.log('forms', forms)
	console.log('customForm', customForm)
	console.log('Elements of the form', customForm.elements)
	console.log('Some html Element by its name', customForm.elements.username)

}