import { useEffect, useRef } from "react"

const useFadeIn = (duration = 1) =>{
    const element = useRef()
    useEffect(()=>{
      if(element.current){
        const {current} = element
        current.style.transition = `opactiy ${duration}s`
        current.style.opacity = 1
      }
  
    },[])
    if(typeof duration !== "number") return
    return { ref : element , style : {opacity : 0}}
  }

  export default useFadeIn