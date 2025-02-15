'use client'
import { Button } from '@/components/Button'
import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'

// fetch('https://quiz-rvml.onrender.com/api/v1/login/', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     'username': 'JohnDoe',
//     'password': '12345678',
//     'email': 'johndoe@gmail.com'
//   })
// })
// .then(response => response.json())
// .then(data => console.log(data))

const page = () => {
  return (
    <main className={styles.main}>
        <h1>Login</h1>
        <form className={styles.form} onSubmit={(e) => {
            e.preventDefault()
          }}>
            <label>
                <span>Enter your username</span>
                <input type="text" placeholder="e.g JohnDoe" required />
            </label>
            <label>
                <span>Enter your password</span>
                <input type="password" placeholder="************" required />
            </label>
            <Button>Login</Button>
            <p>Don't have an account? <Link href='/register' style={{color: 'blue'}}>Register</Link></p>
        </form>
    </main>
  )
}

export default page
