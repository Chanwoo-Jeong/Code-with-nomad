import { useState , useEffect } from "react"

const useNetwork = (onChange) => {
    const [status , setStatus] = useState(navigator.onLine)
    const handleChage = () =>{
      if(typeof onChange === "function"){
        onChange(navigator.onLine)
      }
      setStatus(navigator.onLine)
    }
    useEffect(()=>{
      window.addEventListener("online" , handleChage)
      window.addEventListener("offline" , handleChage)
      return ()=>{
        window.removeEventListener("online" , handleChage)
      window.removeEventListener("offline" , handleChage)
      }
    },[])
    return status
  }
  

  export default useNetwork