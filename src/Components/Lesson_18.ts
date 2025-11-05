'use strict'

// Theme: Strings and its methods

/*
* Information: Classes
*
* # - for private properties and methods
*
* static - it's key word helps to get some properties or methods from mother Class
* */

class Student {
	public name: string
	private hasExperience: boolean

	#age: number // user # for to set private property

	public planet = 'Earth'
	public static country = 'US'
	public _city = 'New York' // _ is a code convention. It's not the part of the JS

	regin!: string

	constructor(name: string, age: number, hasExperience: boolean) {
		this.name = name
		this.#age = age
		this.hasExperience = hasExperience
	}

	static logName(): void {
		console.log(this.name)
	}

	isAdult(): boolean {
		return this.#age >= 18
	}

	isReadyToWork(): boolean {
		return this.hasExperience
	}

	get age() {
		return this.#age
	}

	set age(value: number) {
		this.#age = value
	}

	get city() {
		return `User city is ${this._city}`
	}

	set city(value: string) {
		this._city = [...value].map(
			(letter, idx) => idx === 0
				? letter.toLocaleUpperCase()
				: letter.toLocaleLowerCase()
		).join('')
	}
}

class WorkerStudent extends Student {

	#job: string | null = null

	constructor(name: string, age: number, hasExperience: boolean, job: string) {
		super(name, age, hasExperience)

		this.#job = job
	}

	get job() {
		return this.#job
	}
}

export default function () {
	const user = new Student('Max', 33, true)
	console.log('user', user)
	console.log('user name is', user.name)

	console.log(user.age)
	user.age = 44
	console.log(user.age)

	user.city = 'chiCaGO'
	console.log(user.city)

	// console.log(user.#age) Error: can't use private property

	Student.logName()

	console.log(Student.country)
}


