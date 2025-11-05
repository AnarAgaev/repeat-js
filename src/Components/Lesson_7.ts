'use strict'

// Theme: cycles

/*
* Information:
*
* We usually use cycles when we need repeat some Instruction one more times.
* For reset and stop cycles we can use key word BREAK
*
* */
export default function () {

    // While cycle
    console.log('*** While cycle')
    let i = 1
    while (i < 3) {
        console.log('i into While is', i)

        if (i % 2 === 0) {
            console.log("i is even. Let's break.")
            break
        }

        i++
    }

    console.log('')

    // Do While cycle
    console.log('*** Do While cycle')
    do {
        console.log('i into Do While is', i)
        i++
    } while (i < 5)

    console.log('')

    // Do While cycle
    console.log('*** For cycle')
    for (let j = 1; j <= 5; j++) {

        if (j % 2 === 0) {
            continue
        }

        console.log('j into For is and j is odd', j)

        if (j === 3) {
            console.log("Let's break when j is equal 3")
            break
        }
    }

    console.log('j from For cycle is', j)

}
