import React, {useContext} from 'react'
import { NavContext } from '../layout'

export const page = () => {
    const {setActive} = useContext(NavContext)
        
    useEffect(() => {
        if (typeof window !== "undefined"){
            setActive(window.location.pathname)
        }
    }, [])

  return (
    <div>Quiz List</div>
  )
}


export default page;