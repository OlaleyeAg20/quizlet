import { Button } from '@/components/Button'
import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'

const page = () => {
  return (
    <main className={styles.main}>
        <h1>Register</h1>
        <form action="" className={styles.form}>
            <label>
                <span>Enter your username</span>
                <input type="text" placeholder="user name" />
            </label>
            <label>
                <span>Enter your email</span>
                <input type="email" placeholder="e.g John Doe" />
            </label>
            <label>
                <span>Enter your password</span>
                <input type="password" placeholder="************" />
            </label>
            <label>
                <span>Confirm your password</span>
                <input type="password" placeholder="************" />
            </label>
            <Button>Login</Button>
            <p>Already have an account? <Link href='/login' style={{color: 'blue'}}>Login</Link></p>
        </form>
    </main>
  )
}

export default page
