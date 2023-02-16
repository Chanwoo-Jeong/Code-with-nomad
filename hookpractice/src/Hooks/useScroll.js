import { useState , useEffect } from "react"

const useScroll = () =>{
    const [state , setState] = useState({
      x:0,
      y:0
    })
  
    const onScroll =()=>{
      console.log(window.scrollY)
      setState ({x : window.scrollX ,y : window.scrollY})
    }
  
    useEffect(()=>{
      window.addEventListener("scroll", onScroll)
      return ()=>window.removeEventListener("scroll", onScroll)
    },[])
    console.log(state)
    return state
  }

  export default useScroll