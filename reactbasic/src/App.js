import Button from "./Button"
import style from "./App.module.css"
import { useState ,useEffect } from "react";

function App() {
  const [click,setClick] = useState(0)

  const onclick = () => {
    setClick((e)=>e+1)
  }
  console.log("All time rendering!")

  /** useEffect 함수가 한번만 시행될 수 있도록 보호해줌 */
  useEffect(()=>{console.log("Call the Api")},[])

  const [keyword,setKeyword] = useState("")

  const keychange = (e) => {
    setKeyword(()=>e.target.value)
    console.log(e.target.value)
  }

  useEffect(()=>{
    if(keyword !== "" && keyword.length > 5){
    console.log("Movie serching" , keyword)}}
    ,[keyword]) 
  return (
    <div>
      <h1 className={style.title}>Welcome back!</h1>
      <Button text={"Continue"} />

      <div>Total Click  : {click} </div>
      <button onClick={onclick}>Click!</button>

      <div><input type="text" placeholder="Search here..." value={keyword} onChange={keychange}></input></div>
      <div>here is keyword : {keyword}</div>
    </div>
  );
}

export default App;
