"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./page.module.css"

function page() {
    const [loggedInUser, setLoggedInUser] = useState({})
    const [loading, setLoading] = useState(true)
  

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
    <div>
      {/* <h1>Welcome {loggedInUser.username}</h1> */}
      <section className={styles.userSection}>
        <div className={styles.user}>
          <Image src='/Images/user.png' width={30} height={30} alt="user image placeholder" />
          <span>Welcome, {loggedInUser.username.toUpperCase()} 👋</span>
        </div>
        <p><span className={styles.label}>Username:</span> {loggedInUser.username}</p>
        <p><span className={styles.label}>Email:</span> {loggedInUser.email}</p>
      </section>
    </div>
  );
}

export default page;
