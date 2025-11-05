import './style.scss'

import Lesson from './Components/Lesson_41.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <div class="first-class second-class">
        Hello world!
    </div>

	</br>

	<form id="customForm" action="/call" data-js-form novalidate>
		<input name="username" required minlength="2" maxlength="7">
		<span data-js-form-field-errors>Error message</span>
		<button name="enter" type="submit">Enter</button>
	</form>

	</br>

	<div class="box">
		Lorem ipsum.
		<input id="name" name="username" placeholder="name" />
		<input id="email" name="email" placeholder="email" />
	</div>

	<style>
		.box {
			box-sizing: border-box;
			overflow: auto;
			width: 100%;
			height: auto;
			padding: 30px;
			background-color: lightseagreen;
			border: 20px solid indianred;
		}

		#customForm {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			gap: 10px;
			border: 1px solid white;
			padding: 1rem;
			margin-bottom: 30px;
		}
	</style>
`

window.addEventListener('load', Lesson)