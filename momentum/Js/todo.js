const todoForm = document.getElementById('todoForm')
const todoInput = todoForm.querySelector('input')
const todoList = document.getElementById('todo-list')

let toDos = []
function saveTodos() {
    localStorage.setItem("todos",JSON.stringify(toDos))
}

const deleteDoto = (event) => {
    const li = event.target.parentElement;
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id))
    saveTodos()
    li.remove()
}
const paintTodo = (newTodo) => {
    const li = document.createElement('li')
    li.id = newTodo.id

    const span = document.createElement('span')
    span.innerText = newTodo.text

    const Btn = document.createElement('button')
    Btn.innerText = '❌'

    Btn.addEventListener('click', deleteDoto )
    
    li.appendChild(span)
    li.appendChild(Btn)

    todoList.appendChild(li)
}

function handleTodoSubmit (e) {
    e.preventDefault()
    const newTodo = todoInput.value
    todoInput.value = ''
    const newTodoObj = {
        text:newTodo,
        id: Date.now()
    }
    toDos.push(newTodoObj)
    paintTodo(newTodoObj)
    saveTodos()
}

todoForm.addEventListener('submit', handleTodoSubmit)

const sayHello = (event) => {
    console.log('hello',event)
}

const savedTodos = localStorage.getItem('todos')
console.log(savedTodos)
if(savedTodos !== null){
    const parsedTodo = JSON.parse(savedTodos)
    toDos = parsedTodo
    parsedTodo.forEach(paintTodo);
}
