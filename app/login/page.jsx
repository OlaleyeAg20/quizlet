'use client'
import { Button } from '@/components/Button'
import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'

function login(username, password) {
  fetch('https://quiz-rvml.onrender.com/api/v1/api-token-auth/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({username, password})
  })
  .then(response => response.json())
  .then(data => {
    console.log(data)
    if(window.localStorage) {
      localStorage.setItem('token', data.token)
    }
    if(data.token){
      fetch('https://quiz-rvml.onrender.com/api/v1/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: "Token " + data.token
        },
      })
        .then(response => response.json())
        .then(data => {
          console.log(data)
          window.location = '/quiz'
        })
    } else {
      alert(data.non_field_errors[0])
    }
  })
  .catch(error => console.log(error))
}


const page = () => {
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')

  return (
    <main className={styles.main}>
        <h1>Login</h1>
        <form className={styles.form} onSubmit={(e) => {
            e.preventDefault()
            login(username, password)
          }}>
            <label>
                <span>Enter your username</span>
                <input type="text" placeholder="e.g JohnDoe" name='username' required value={username} onChange={event => {
                  setUsername(event.target.value)
                }} />
            </label>
            <label>
                <span>Enter your password</span>
                <input type="password" placeholder="************" name='email' required value={password} onChange={event => {
                  setPassword(event.target.value)
                }} />
            </label>
            <Button>Login</Button>
            <p>Don't have an account? <Link href='/register' style={{color: 'blue'}}>Register</Link></p>
        </form>
    </main>
  )
}


export {login}
export default page
