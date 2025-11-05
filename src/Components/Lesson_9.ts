'use strict'

// Theme: objects

/*
* Information:
*
* We can save in Objects any types
* For getting property of Object we need to use or Dot or ['property_name']
* For add some property to the Object we can use Dot too
* For remove some property we can use delete construction
*
* Form check there is some property in Object we should use 'in' construction
*
* For iteration in Object use for in cycle
*
* */

export default function () {
    console.log('*** Objects ***')

    const firstObject = {

        login: 'some-login',
        pass: 'some-pass',
        'registration date': '01.01.2025',
        'last-auth': '07.03.2025',

        age: 33,
        isAdult: true,
        job: null,
        kids: undefined,

        address: {
            city: 'Moscow',
            zipCode: '1234'
        },

        sayHello: () => console.log('Hello'), // Object's method

    }
    console.log('firstObject', firstObject)

    const secondObject = new Object()
    console.log('secondObject', secondObject)


    // Getting property of object
    console.log('login', firstObject.login)
    console.log('registration date', firstObject["registration date"])


    // For use Object's method
    firstObject.sayHello()


    // Use not living property returns undefined
    console.log('firstObject.blablabla', firstObject.blablabla) // undefined


    // Use some property
    firstObject.name = 'Alex'
    console.log('name', firstObject.name)

    // Remove property
    delete firstObject.name
    console.log('name', firstObject.name)

    // Computed names
    // const objectName = prompt('Enter a property name:')
    // const objectProperty = prompt(`Enter a property ${objectName}:`)
    //
    // const computedNames = {
    //     [`${objectName}`]: objectProperty
    // }
    //
    // console.log('computedNames', computedNames)


    // Check property in Object
    console.log('check property', ('someRandomPropertyName' in firstObject) )


    // Iteration in Object
    for (const key in firstObject) {
        console.log(`key: ${key}, value:`, firstObject[key])
    }


}
