'use client'
import React, { useState, useEffect } from 'react'
import { Logo } from '../components/Logo'
import Link from 'next/link'
import { Button } from '../components/Button'
import styles from './page.module.css'

export const Header = () => {
  const [loggedin, setLoggedIn] = useState(false)
  let token;

  if (typeof window !== "undefined" && window.localStorage){
    token = localStorage.getItem("token")
  }

  function logout(){
    fetch('https://quiz-rvml.onrender.com/api/v1/logout/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: "Token " + token
      },
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        localStorage.removeItem("token")
        window.location = '/'
      })
      .catch(error => {alert(`an error occoured: ${error}`)})
  }
  
  useEffect(() => {
    if(token){
      setLoggedIn(true)
    }else{
      setLoggedIn(false)
    }
  }, [])

  return (
    <header className={styles.header}>
        <Link href='/'>
            <Logo />
        </Link>
        { loggedin ? null :
          <nav>
            <ul>
                <li><a href="#">How To</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
          </nav>
        }
        {
          loggedin ? <Button onClick={() => {logout()}}>Log Out</Button> :
          <Link href="/login">
              <Button>Login</Button>
          </Link>
        }
    </header>
  )
}

export default Header