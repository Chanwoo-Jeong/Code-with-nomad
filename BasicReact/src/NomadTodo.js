import { useState } from "react"

function NomadTodo (){

    const [todo, setTodo] = useState("")
    const [todos, setTodos] = useState([])

    const onChange =(e)=>{
        setTodo(e.target.value)
    }
    const onSubmit = (e) => {
        e.preventDefault()
        if(todo===""){return}
        setTodo("")
        // setTodos((currentArray)=>[todo, ...currentArray])
        /** 이건 왜 안되는건데 ...? 
         * React 에서는 reason 중괄호 안에는 return 이 반드시 포함되어 있어야한답니다*/
        setTodos((currentArray)=>{return[todo,...currentArray]})
    }
    console.log(todos)

    return (
    <div>
        <h1>TodoList {todos.length} </h1>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="Write to do .." value={todo} onChange={onChange}/>
        <button>Submit</button>
      </form>
      <hr/>
      <h2>TodoList</h2>
      <ul>
      {todos.map((item,index)=><li key={index}>{item}</li>)}
        {/* 함수를 써서 만듬 , 배열 안에 있는것 하나하나 꺼내서 함수를 진행시켜줌  */}
      </ul>
    </div>
)
}

export default NomadTodo