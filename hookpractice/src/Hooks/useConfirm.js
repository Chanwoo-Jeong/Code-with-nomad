const useConfirm = (message, callback ,rejection) => {
    if(typeof callback !== "function") {
      return
    }
    const confirmAction = () =>{
      if(window.confirm(message)){
        callback()
      } else { 
        rejection()
      }
    }
  return confirmAction  
}

export default useConfirm