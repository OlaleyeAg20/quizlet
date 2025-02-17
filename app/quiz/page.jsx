"use client";
import { useEffect, useState } from "react";

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
      <h1>Welcome {loggedInUser.username}</h1>
    </div>
  );
}

export default page;
