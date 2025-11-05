'use strict'

// Theme: Key word - this

/*
* Information:
*
*
* "this" into the Classes targets parent class
*
* Arrow function don't have self this. It uses parent "this"
*
*
* */

export default function () {

    console.log('this', this) // Global object Window



    // this into the Classes
    const someClass = {
        name: 'Max',
        age: 33,
        logThis: function() {
            console.log('this into the Object body is:', this) // Object someClass
            console.log('printing props name from Object', this.name)
        },
        logArrowThis: () => {
            console.log('this at the Arrow function into the Object body is:', this) // Global Window
        },
        address: {
            city: 'New York',
            zipCode: '12345',
            logInnerThis() {
                console.log('this into the inner Object:', this) // Object address
            }
        }
    }

    someClass.logThis()
    someClass.logArrowThis()
    someClass.address.logInnerThis()

}
