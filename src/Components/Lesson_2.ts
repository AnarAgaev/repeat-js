'use strict'

// Creating variables

/* Information:
 *
 * For creating some variable we should use key-words as let, const or var.
 * Initializing - this is process of save some data to the variable
 * */

export default function Lesson_2() {

    // *** var
    console.log(varMessage) // The value of the msg is undefined --- not Error
    var varMessage


    // *** let
    let letMessage // let message = 'Hello world'

    letMessage = 'Hello let!'
    console.log(letMessage)

    letMessage = 'Goodbye let!'
    console.log(letMessage)


    // *** const
    const constMessage = 'Hello const!'
    console.log(constMessage)

    // constMessage = 'Hello const!' --- this process will fire Error



    // *** saving values as link
    let baseValue = 'Base value'
    let newValue = baseValue
    console.log(baseValue)
    console.log(newValue)
    newValue = 'Second value of the New value'
    console.log('--------------')
    console.log(baseValue)
    console.log(newValue)
}