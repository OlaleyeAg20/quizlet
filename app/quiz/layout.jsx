"use client";
import React from 'react'
import Image from "next/image";
import styles from "./page.module.css"
import { useEffect, useState, createContext } from "react";
import Link from 'next/link';


const NavContext = createContext()

const layout = ({children}) => {
    const [loggedInUser, setLoggedInUser] = useState({})
    const [loading, setLoading] = useState(true)
    const [active, setActive] = useState(null)
  
  useEffect(() => {
    setActive(window.location.pathname)
  }, [active])

  useEffect(() => {
    let token = localStorage.getItem("token");

  if (!token) {
    window.location = "/login";
  } else {
    fetch("https://quiz-rvml.onrender.com/api/v1/profile/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token " + token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setLoggedInUser(data)
        setLoading(false)
      })
      .catch((error) => console.log(error));
  }
  }, [])

  return loading ? <h1>Loading...</h1> : (
    <NavContext.Provider value={{active, setActive}}>

        <div>
        <section className={styles.userSection}>
            <div className={styles.user}>
            <Image src='/Images/user.png' width={30} height={30} alt="user image placeholder" />
            <span>Welcome, {loggedInUser.username?.toUpperCase()} 👋</span>
            </div>
            <p><span className={styles.label}>Username:</span> {loggedInUser.username}</p>
            <p><span className={styles.label}>Email:</span> {loggedInUser.email}</p>
        </section>
        <nav className={styles.quizNav}>
            <ul>
            <li className={active == "/quiz" ? styles.active : null}><Link onClick={() => {
                setActive(window.location.pathname)
            }} href="/quiz">Create Quiz</Link></li>
            <li className={active == "/quiz/list" ? styles.active : null}><Link onClick={() => {
                setActive(window.location.pathname)
            }} href="/quiz/list">Quizes</Link></li>
            <li className={active == "/quiz/settings" ? styles.active : null}><Link onClick={() => {
                setActive(window.location.pathname)
            }} href="/quiz/settings">Settings</Link></li>
            </ul>
        </nav>
        {children}
        </div>
    </NavContext.Provider>
  )
}

export {NavContext}

export default layout