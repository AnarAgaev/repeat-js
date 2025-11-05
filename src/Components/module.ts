export const a = 'a'
export const b = 'b'
export const c = 'c'

export const fn = () => {
	console.log('Imported function')
}

const defFn = () => {
	console.log('Imported default function')
}

export default defFn