'use strict'

// Theme: objects - part 2

/*
* Information:
*
*
* */

export default function () {

    // *************** Comparison of objects
    const objectOne = {
        name: 'Max',
        age: '33',
        address: {
            city: 'Moscow',
            zipCode: 1234567
        },
        status: 'admin'
    }

    const objectTwo = {
        name: 'Max',
        age: '33',
        address: {
            city: 'Moscow',
            zipCode: 1234567
        },
        status: 'user'
    }

    const areObjectsEqual = (firstObject, secondObject) => {

        // At first checking lengths of both objects
        if (Object.keys(firstObject).length !== Object.keys(secondObject).length) {
            return false
        }

        // At second check types of object for comparison inner Objects
        for (const key in firstObject) {
            const areBothObject = typeof firstObject[key] === 'object' && typeof secondObject[key] === 'object'

            if (areBothObject) {
                if (!areObjectsEqual(firstObject[key], secondObject[key])) {
                    return  false
                }
            } else if (firstObject[key] !== secondObject[key]) {
                return false
            }
        }

        return true
    }

    console.log('Both objects are equal', areObjectsEqual(objectOne, objectTwo))




    // *************** Copy Object

    const objectUser = {
        name: 'Max',
        age: '33',
        status: 'user'
    }

    // const objectAdmin = Object.assign({}, objectUser)
    const objectAdmin = { ...objectUser }
    objectAdmin.status = 'admin'

    console.log('objectUser', objectUser)
    console.log('objectAdmin', objectAdmin)




    // *************** District Objects
    const someUser = {
        city: 'Moscow',
        name: 'Max',
        age: '33',
        isDeveloper: true,
        company: 'Google',
        jobPost: 'HR Manager',
        yearOfExperience: 7,
        hasCat: true
    }

    const {
        name,
        age,
        isDeveloper: developer,
        city: userCity = 'Not added', // renamed to userCity and added default value 'Not added'
        ...otherProps // Spreading to the Object other properties
    } = someUser

    console.log('name', name)
    console.log('age', age)
    console.log('developer', developer)
    console.log('userCity', userCity)
    console.log('otherProps', otherProps)
}
