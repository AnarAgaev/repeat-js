'use strict'

// Connecting with users and Switch Case constructor

/* Information
*
* For connecting with users we can use functions:
* 1. Alert - only message
* 2. Prompt - message and get some data
* 3. Confirm - return true of false user answer
*
*
*
* Switch/Case construction - it introduces Instruction pipeline goes at on of road
* */

export default function () {

    // // Alert - only message
    // const messageAlert = 'Hello Alert window!'
    // alert(messageAlert)
    // console.log('This instruction  will work only after close Alert window.')
    //
    //
    //
    // // Prompt - message and get some data
    // const promptEmail = prompt(
    //     'Please enter a valid email address',
    //     'defaultUserAnswer@email.com'
    // )
    // console.log('User entered email address:', promptEmail)
    //
    // // If user clicked Close or Cansel result Prompt value will get NULL value.
    //
    //
    //
    // // Confirm - return true of false user answer
    // const userAnswer = confirm('Are you sure?')
    // console.log('User answer:', userAnswer)



    // Switch/Case
    const userAge = Number(prompt('How old you are? Please, use only number'))
    switch (true) {
        case userAge < 18 && userAge !== 0: {
            console.log("You're to young!", userAge)
            console.log('User symbols { ... } for create not single lines 7Instruction')
            break;
        }

        case userAge > 77:
            console.log("You're to old!")
            break;

        case userAge >= 18 && userAge <= 77:
            console.log("You're logged")
            break;

        default:
            console.log("You're not logged in!")
    }

}
