const input = document.querySelector('input')
const btn = document.querySelector('button')
const error = document.querySelector('.error')

const testEmail = () => {
	const re =
		/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

	if (re.test(input.value)) {
		error.style.display = 'none'
		input.value = ''
	} else {
		error.style.display = 'block'
	}
}

btn.addEventListener('click', testEmail)
