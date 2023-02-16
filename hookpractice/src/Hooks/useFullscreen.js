import { useRef } from "react"
const useFullscreen = () =>{
    const element = useRef()
    const triggerFull =() =>{
      element.current.requestFullscreen()
    }
    const exitFUll = () =>{
      document.exitFullscreen()
    }
    return { element , triggerFull , exitFUll }
  }

  export default useFullscreen