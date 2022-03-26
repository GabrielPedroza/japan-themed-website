import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Signup.scss"

const Signup = () => {
	let [username, setUsername] = useState("")
	let [password, setPassword] = useState("")
	let [email, setEmail] = useState("")

	const navigate = useNavigate()

	// Guard clause
	const handleChange = (e, type) => {
		if (type === "us") return setUsername((username = e.target.value))
		if (type === "pw") return setPassword((password = e.target.value))
		if (type === "em") return setEmail((email = e.target.value))
	}

	const handleSubmit = (e) => {
		return (
			e.preventDefault(),
			setTimeout(() => {
				navigate("/")
				location.reload() // dirty fix for having gltf painted on the screen
			}, 2000)
		)
	}

	const handleHome = (e) => {
		e.preventDefault()
		navigate("/")
		location.reload() // dirty fix for having gltf painted on the screen
	}

	return (
		<>
			<div className='l-signup__container'>
				<a
					className='c-return__home c-sign__pos'
					onClick={(e) => handleHome(e)}>
					GO TO HOME
				</a>
				<form onSubmit={(e) => handleSubmit(e)} className='c-signup__container'>
					<label htmlFor='username' className='l-label'>
						Username:
					</label>
					<input
						autoFocus
						minLength='1'
						required
						type='text'
						id='username'
						className='l-input'
						onChange={(e) => handleChange(e, "us")}
					/>
					<label htmlFor='password' className='l-label'>
						Password:
					</label>
					<input
						type='password'
						id='password'
						minLength='1'
						required
						className='l-input'
						onChange={(e) => handleChange(e, "pw")}
						min={1}
					/>
					<label htmlFor='email' className='l-label'>
						email:
					</label>
					<input
						type='email'
						id='email'
						minLength='1'
						required
						className='l-input'
						onChange={(e) => handleChange(e, "em")}
						min={1}
					/>
					<input
						value='Log in'
						id='c-submit'
						className='l-submit'
						type='submit'
						onClick={(e) => (e.target.value = "Loading...")}
					/>
				</form>
			</div>
		</>
	)
}

export default Signup
