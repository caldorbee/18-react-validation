import { useState } from 'react'

export default function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [errors, setErrors] = useState({})


  function handleSignUp() {
    const errors = validateForm({ Name, email, userName, password, confirmPassword })
    setErrors(errors)
    if (!Object.keys(errors).length) {
      signUp({ Name, lastName, userName, email, password })
    }
  }

  return (
    <div className="sign-up">
      <input onChange={e => setName(e.target.value)} value={name} />
      {errors.name && <p>{errors.name}</p>}
      <input onChange={e => setEmail(e.target.value)} value={email} />
      {errors.email && <p>{errors.email}</p>}
      <input onChange={e => setUserName(e.target.value)} value={userName} />
      {errors.userName && <p>{errors.userName}</p>}
      <input type="password" onChange={e => setPassword(e.target.value)} value={password} />
      {errors.password && <p>{errors.password}</p>}
      <input type="password" onChange={e => setConfirmPassword(e.target.value)} value={confirmPassword} />
      {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
      <button onClick={handleSignUp}></button>
    </div>
  )
}

function validateForm(values) {
  const errors = {}
  if (!values.name) errors.name = "Name is required"
  if (!values.email) errors.email = "An email address is required"
  if (!values.userName) errors.userName = "Username is required"
  if (!values.password) errors.password = "A password is required"
  else if (!values.password != values.confirmPassword) errors.confirmPassword = "Passwords do not match"
  return errors
}