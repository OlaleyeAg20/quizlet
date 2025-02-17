'use client'
import React, { useEffect, useContext } from 'react'
import { NavContext } from '../layout'

const page = () => {
    const {setActive} = useContext(NavContext)
    
    useEffect(() => {
        if (typeof window !== "undefined"){
            setActive(window.location.pathname)
        }
    }, [])
  return (
    <div>Profile Settings</div>
  )
}

export default page