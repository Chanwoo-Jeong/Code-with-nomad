import { useState ,useEffect } from "react"


function TodoList (props) { 

    const relist = []

    for(let i=0 ; i<props.list.length ; i++) {
        relist.push(<div>
            {/* <input id={`check${i}`} type="checkbox" disabled={true}  /> */}
            <input id={`todo${i}`} value={props.list[i]} disabled={true} onChange={(e)=>{props.onChange2(e,i)}}/>
                <button onClick={()=>{
                    let sol = document.getElementById(`todo${i}`)
                    sol.disabled ? sol.disabled = false : sol.disabled = true
                    // let check = document.getElementById(`check${i}`)
                    // check.disabled ? check.disabled = false : check.disabled = true
                    }} >Edit</button>
                <button onClick={()=>{props.Delete(i)}} >Delete</button>
        </div>)
    }

    return <div>
        <h2>List up</h2>
            {relist}    
        </div>
}

function Todo () {

    const [todo, setTodo] = useState("")

    const onChange = (event) => {
        setTodo(event.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        let copy= [...list]
        copy.push(todo)
        setList(copy)
        setTodo("")
    }

    const [list , setList] = useState([])

    const Delete = (i) => {
        let copy = [...list]
        copy.splice(i,1)
        setList(copy)
    }

    const onChange2 = (e, i) => {
        let copy = [...list]
        copy[i] =  e.target.value
        setList(copy)
    }

    function sorting () {
        let you = [...list]
        you.sort()
        setList(you)
    }
     function sortReverse () {
        let me = [...list]
        me.sort().reverse()
        setList(me)
    }
    
    
   return <div>
                <h1>Todo List</h1> 
                <form onSubmit={onSubmit}>
                    <input type="text" placeholder="Write your to Do" value={todo} onChange={onChange} />
                    <button>Add to Do</button>
                </form>
                
                <TodoList list={list} Delete={Delete} onChange2={onChange2} />  
                <button onClick={()=>{sorting()}}>go</button>
                <button onClick={()=>{sortReverse()}}>reverse</button>
               
            </div>
}

export default Todo