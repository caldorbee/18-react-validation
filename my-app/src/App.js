import { useState } from 'react'
import './App.css';

export default function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [website, setWebsite] = useState('')
  const [errors, setErrors] = useState({})


  function handleSignUp() {
    const errors = validateForm({ name, email, userName, password, confirmPassword, website })
    setErrors(errors)
    if (!Object.keys(errors).length) {
      SignUp({ name, email, userName, password, website })
    }
  }

  return (
    <div className="container">
      <h1>Profile Form - All fields required</h1>
      <div className="sign-up">
        <p>Name</p>
        <input type="text" onChange={e => setName(e.target.value)} value={name} placeholder="Michael"/>
        {errors.name && <p style={{color: "red"}}>{errors.name}</p>}
        <p>Email</p>
        <input type="email" onChange={e => setEmail(e.target.value)} value={email} placeholder="email@test.com"/>
        {errors.email && <p style={{color: "red"}}>{errors.email}</p>}
        <p>Username</p>
        <input type="text" onChange={e => setUserName(e.target.value)} value={userName} placeholder="myusername"/>
        {errors.userName && <p style={{color: "red"}}>{errors.userName}</p>}
        <p>Password</p>
        <input type="password" onChange={e => setPassword(e.target.value)} value={password} placeholder="*****"/>
        {errors.password && <p style={{color: "red"}}>{errors.password}</p>}
        <p>Confirm password</p>
        <input type="password" onChange={e => setConfirmPassword(e.target.value)} value={confirmPassword} placeholder="*****"/>
        {errors.confirmPassword && <p style={{color: "red"}}>{errors.confirmPassword}</p>}
        <p>Website</p>
        <input type="url" id="a" onChange={e => setWebsite(e.target.value)} value={website} placeholder="www.mywebsite.com"/>
        {errors.website && <p style={{color: "red"}}>{errors.website}</p>}
        <button onClick={handleSignUp} id="submit">Submit</button>
      </div>
    </div>
  )
}

function validateForm(values) {
  const errors = {}
  if (!values.name) errors.name = "Cannot be blank"
  if (!values.email) errors.email = "Must be a valid email"
  if (!values.userName) errors.userName = "Cannot be blank"
  if (!values.password) errors.password = "Cannot be blank"
  else if (!values.password != values.confirmPassword) errors.confirmPassword = "Must match the password"
  if (!values.website) errors.website = "Must be a valid url"
  return errors
}