// @ts-nocheck

'use strict'

/*
* Themes: Form controller validation
*
*   
* First we can use html nave methods for validate form controllers. Thees are
*   
* required - the controller must be filled
* minlength - minimal characters of length value
* maxlength - maximum characters of length value
* patter - match to template as regular script
*
*
*********************************************************
*
* .validity - it's object save all errors properties of any controllers
*
*
*
* */

class FormsValidation {

	selectors = {
		form: '[data-js-form]',
		fieldErrors: '[data-js-form-field-errors]'
	}

	errorMessages = {
		valueMissing: () => "Please, field this controller",
		patternMismatch: ({ title }) => title  || "Filed data isn't correct",
		tooShort: ({ minLength }) => `Value is too short. It's need minimum ${minLength} letters`,
		tooLong: ({ maxLength }) => `Value is too long. It's need maximum ${maxLength} letters`
	}

	constructor() {
		this.bindEvents()
	}

	manageErrors(fieldControlElement, errorMessages) {
		const fieldErrorsElement = fieldControlElement
			.parentElement.querySelector(this.selectors.fieldErrors)

		fieldErrorsElement.innerHTML = errorMessages
			.map(message => `<span class=".error">${message}</span>`)
			.join(', ')
	}

	validateField(fieldControlElement) {
		const errors = fieldControlElement.validity
		const errorMessages = []

		Object.entries(this.errorMessages).forEach(([errorType, getErrorMessage]) => {

			if (errors[errorType]) {
				errorMessages.push(getErrorMessage(errorType))
			}
		})

		this.manageErrors(fieldControlElement, errorMessages)

		const isValid = errorMessages.length === 0

		fieldControlElement.ariaInvalid = !isValid

		return isValid
	}

	onBlur(event) {
		const { target } = event

		const isFormField = target.closest(this.selectors.form)
		const isRequired = target.required

		if (isFormField && isRequired) {
			this.validateField(target)
		}
	}

	onChange(event) {
		const { target } = event

		const isRequired = target.required
		const isToggleType = ['radio', 'checkbox'].includes(target.type)

		if (isToggleType && isRequired) {
			this.validateField(target)
		}
	}

	onSubmit(event) {
		const { target } = event
		const isFormElement = target.matches(this.selectors.form)

		if (!isFormElement) return

		const requiredControlElements = [...target.elements].filter(({required}) => required)

		console.log('requiredControlElements', requiredControlElements)

		let isFormValid = true
		let firstInvalidFieldControl = null

		requiredControlElements.forEach(element => {
			const isFieldValid = this.validateField(element)

			if (!isFieldValid) {
				isFormValid = false

				if (!firstInvalidFieldControl) {
					firstInvalidFieldControl = element
				}
			}
		})

		if (!isFormValid) {
			event.preventDefault()
			firstInvalidFieldControl.focus()
		}
	}

	bindEvents() {
		document.addEventListener('blur', event => {
			this.onBlur(event)
		}, { capture: true })

		document.addEventListener('change', event => this.onChange(event))
		document.addEventListener('submit', event => this.onSubmit(event))
	}
}

export default async function () {
	new FormsValidation()
}