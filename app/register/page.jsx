"use client";
import { Button } from "@/components/Button";
import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { login } from "../login/page";

function register(username, password, password2, email) {
  fetch("https://quiz-rvml.onrender.com/api/v1/register/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password, password2, email }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if(data.message){
        login(username, password);
      }else{
        alert(data);
      }
    })
    .catch((error) => console.log(error));
}

const page = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [password2, setPassword2] = React.useState("");
  const [email, setEmail] = React.useState("");

  return (
    <main className={styles.main}>
      <h1>Register</h1>
      <form
        action=""
        className={styles.form}
        onSubmit={(e) => {
          e.preventDefault();
          register(username, password, password2, email);
        }}
      >
        <label>
          <span>Enter your username</span>
          <input
            type="text"
            placeholder="user name"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            required
          />
        </label>
        <label>
          <span>Enter your email</span>
          <input
            type="email"
            placeholder="e.g John Doe"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
        </label>
        <label>
          <span>Enter your password</span>
          <input
            type="password"
            placeholder="************"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
          />
        </label>
        <label>
          <span>Confirm your password</span>
          <input
            type="password"
            placeholder="************"
            value={password2}
            onChange={(e) => {
              setPassword2(e.target.value);
            }}
            required
          />
        </label>
        <Button>Login</Button>
        <p>
          Already have an account?{" "}
          <Link href="/login" style={{ color: "blue" }}>
            Login
          </Link>
        </p>
      </form>
    </main>
  );
};

export default page;
