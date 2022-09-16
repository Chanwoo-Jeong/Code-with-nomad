
//const 는 값이 변하지 않는 상수 선언
//let 은 값이 변하는 변수 선언
//var 과거의 자바스크립트는 언제든지 업데이트 가능

// const a = prompt('a를 입력하세요')
// let b = prompt('b를 입력하세요')
// let myName = 'chanwoo'

// console.log(
//     Number(a)+Number(b),
//     a*b,
//     a/b,
// )

// console.log('hello ' + myName)

// myName = 'chanwoolus';
// console.log('hello ' + myName)

///////////////////////////////////////////

// const amIFat = null;
// let something ;
// console.log(amIFat); // null
// console.log(something); // undefined

// const player = {
//     name : '찬우',
//     age : 26,
//     sex : 'man',
//     say : function () {
//         console.log('Hello I\'m ' + this.name)
//     }
// }

// console.log(player.name)
// player.say()

// const age = parseInt(prompt('How old are you'))
// const sex = prompt('sex?')

// if ( isNaN(age)===false && age>19 && sex==='man'){
//     console.log('its possile')
// } else {
//     if ( isNaN(age)===true){
//         console.log('please number')
//     } else {
//     console.log('NOPE!!')
//     }
// }


// console.log(isNaN(age))

// const title = document.getElementById('title')
// title.innerText = 'Got you!'
// const class2 = document.getElementsByClassName('Hello')

// for ( i=0 ; i<class2.length ; i++){
//     class2[i].innerText = 'class Hello'+i
// }

// //querySelector은 document 를 css 방식으로 가져올 수 있음
// //첫번째 element만 가져옴

// //queryselectorAll을 쓰면 다 가져옴

// const park = document.querySelector('.happy:first-child h1')
// console.dir(park)


// const handletitleclick = () => {
//     park.style.color = 'blue'
// }

// const handlemouseenter = () => {
//     console.log('mouse is enter')
// }

// const handlemouseleave = () => {
//     console.log('mouse out!')
// }

// const openWindow = () => {
//     console.log('open window!')
// }
// const windowresize = () => {
//     console.log('resize window!')
// }

// const windowCopy = () => {
//     console.log('who is copy!')
// }
// const windowOnline = () =>{
//     alert('onlien!')
// }
// const windowOffline = () => {
//     alert('offline!')
// }
// park.addEventListener('click', handletitleclick)
// park.addEventListener('mouseenter', handlemouseenter)
// park.addEventListener('mouseleave', handlemouseleave)
// window.addEventListener('load', openWindow)
// window.addEventListener('resize', windowresize)
// window.addEventListener('copy', windowCopy)
// window.addEventListener('online', windowOnline)
// window.addEventListener('offline', windowOffline)

// //Todolist

// const grabButton = document.querySelector('#title')


// const changeColor = () => {
//    grabButton.classList.toggle('active')
// }
// grabButton.addEventListener('click', changeColor)

// window.addEventListener('load', ()=>{
//    const newTask = document.getElementById('newTask')
//    const listTask = document.getElementById('list')
//    const yesBtn = document.getElementById('yesBtn')
//    console.log(yesBtn)
   
//    yesBtn.addEventListener('click',()=>{
//       newT =  newTask.value
//       const newList = document.createElement('div')
//       const deleteB = document.createElement('button')
      
//       deleteB.innerText = 'delete'
//       newList.innerText = newT

//       newList.appendChild(deleteB)
//       listTask.appendChild(newList)
      
//       deleteB.addEventListener('click', ()=> {
//          newList.remove()
//       })

//       newTask.value = ''
//    })
// })

const loginForm = document.getElementById('login-form')
const loginInPut = loginForm.querySelector('input')
const greeting =  document.querySelector('#greeting')


loginForm.addEventListener('submit', (e)=>{
   e.preventDefault()
   const username = loginInPut.value
   loginForm.classList.add('hidden')
   localStorage.setItem('username', username)

   paintGreeting(username)
   
})

const paintGreeting = (username) => {
   greeting.innerText = `Hello ${username}!`
   greeting.classList.remove('hidden')
}

const saveUsername  = localStorage.getItem('username')

if (saveUsername === null) { 
   loginForm.classList.remove('hidden')
} else {
   paintGreeting(saveUsername)
   
}
