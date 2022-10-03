const saveButton =document.querySelector("#save")
const fileInput = document.querySelector("#file")
const modeBtn = document.getElementById("mode-btn")
const resetBtn = document.getElementById("reset-btn")
const erasetBtn = document.getElementById("erase-btn")
const colorOptions =  Array.from(document.getElementsByClassName("color-option"))
const color = document.getElementById("color")
const lineWidth = document.getElementById("line-width")
const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")
canvas.width = 800
canvas.height = 800
ctx.lineCap = "round"
ctx.lineWidth = lineWidth.value
const textInput = document.querySelector("#text")


//2-2. 캔버스 그림앱 눌러서 선그리기

let isPainting = false;
const onMove = (event) => {
    if(isPainting){
        ctx.lineTo(event.offsetX,event.offsetY)
        ctx.stroke()
        return;
    }
    
    ctx.moveTo(event.offsetX, event.offsetY)

}
function stratpainting () {
    isPainting =true
}

function cancelpainting () {
    isPainting = false
    ctx.beginPath()
}

const onLineWidthChange = (event) => {
   
    ctx.lineWidth = event.target.value
}

function onColorchange (event) {
    console.log(event)
    ctx.strokeStyle =  event.target.value
    ctx.fillStyle = event.target.value
}

// const onColorClick = (e) =>{
//     ctx.strokeStyle =  e.target.dataset.color
//     ctx.fillStyle = e.target.dataset.color
//     color.value = e.target.dataset.color
    
// }
let isFilling = false;
const onModeClick = (e) => {
    if(isFilling){
        isFilling = false
        modeBtn.innerText = "Fill"} else {
            isFilling =true
            modeBtn.innerText = "Draw"
        }
}

function onCanvasClick () {
    if(isFilling){
        ctx.fillRect(0,0,800,800)
    }
}

function onResetClick () {
    ctx.fillStyle = "white"
    ctx.fillRect(0,0,800,800)
}

function onEraseBtnClick () {
    ctx.strokeStyle = "white"
    isFilling = false
    modeBtn.innerText = "Fill"
}

function onFilechange (event) {
    const file = event.target.files[0]
    const url = URL.createObjectURL(file)
    const image = new Image()
    image.src = url

    
    image.onload =function () {
        ctx.drawImage(image, 0, 0, 200,200)
        fileInput.value =null
    }
}

const onDoubleClick = (e) =>{
    
    const text = textInput.value
    if(text !== ""){
        ctx.save()
        ctx.lineWidth = 1
        ctx.font = "48px serif"
        ctx.fillText(text,e.offsetX,e.offsetY)
        ctx.restore()
    }
    
    console.log(e.offsetX,e.offsetY)
} 

const onsaveImage = (e) => {
    const url = canvas.toDataURL();
    const a = document.createElement("a")
    a.href = url
    a.download = "myDrawing.png"
    a.click();
}

canvas.addEventListener("dblclick", onDoubleClick)
canvas.addEventListener("mousemove", onMove)
canvas.addEventListener("mousedown",stratpainting)
canvas.addEventListener("mouseup",cancelpainting)

canvas.addEventListener("mouseleave", cancelpainting)
canvas.addEventListener("click", onCanvasClick)
lineWidth.addEventListener("change", onLineWidthChange)
color.addEventListener("change", onColorchange)

colorOptions.forEach(itmems => itmems.addEventListener("click" , (e) =>{
    ctx.strokeStyle =  e.target.dataset.color
    ctx.fillStyle = e.target.dataset.color
    color.value = e.target.dataset.color
    
}))
// 이거 밖에서는 먹고 안으로 가져오면 안먹어

modeBtn.addEventListener("click", onModeClick)
resetBtn.addEventListener("click",onResetClick)
erasetBtn.addEventListener("click", onEraseBtnClick)
fileInput.addEventListener("change", onFilechange)

saveButton.addEventListener("click", onsaveImage)



//1. 집만들기
//////////////////////////////////////////
// ctx.fillRect(200,200,50,200)
// ctx.fillRect(400,200,50,200)
// ctx.lineWidth = 2;
// ctx.fillRect(300,300,50,100)
// ctx.fillRect(200,200,200,20)
// ctx.moveTo(200,200)
// ctx.lineTo(325,100)
// ctx.lineTo(450,200)
// ctx.fill()
//////////////////////////////////////////

//2. rect 을 이용하여 사각형 만들기
// ctx.rect(50,50,100,100)
// ctx.rect(150,150,100,100)
// ctx.rect(250,250,100,100)
// ctx.fill()

// ctx.beginPath()
// ctx.rect(350,350,100,100)
// ctx.rect(450,450,100,100)
// ctx.fillStyle = "red"

// setTimeout(()=>{ctx.fill();},1000)


//2-1. 캔버스 그림앱 클릭하면 선색바뀌는 코드
// ctx.lineWidth = "2px"
// // ctx.moveTo(0,0)

// const colors = [
//     "#D95B72",
//     "#556AA1",
//     "#F8F6CF",
//     "#59B7B7",
//     "#381A40",
//     "#67BFEF",
// ]
// const onClick = (event) => {
//     // ctx.beginPath()
//     ctx.moveTo(0,0)

//     canvas.addEventListener("click", ()=>{
//         ctx.beginPath()
//         const color = colors[Math.floor(Math.random() * colors.length)]
//         ctx.strokeStyle = color;
//     })
    
//     ctx.lineTo(event.offsetX, event.offsetY)
//     ctx.stroke()
   
// }

// canvas.addEventListener("mousemove", onClick)



//3.랜덤 정사각형 출력하기(ointo 와 stroke 활용)
////////////////////////////////////////

// const randomX = () => {
// let x = Math.floor(Math.random()*800)
// let Xresult = x

// ctx.moveTo(50,50)
// ctx.lineTo(Xresult,50)
// ctx.lineTo(Xresult,Xresult)
// ctx.lineTo(50,Xresult)
// ctx.lineTo(50,Xresult)
// ctx.stroke()
// ctx.fill()
// }

// const reset = () => {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     ctx.beginPath()
// }

// setInterval(randomX,2000)
// setInterval(reset,1999)

// QnA . 랜덤으로 변수를 출력 할 순 없는걸까?

// let x
// let y

// function randomNumberX() {
//     x = Math.floor(Math.random()*10)
//     return x
// }
// function randomNumberY() {
//     y = Math.floor(Math.random()*10)
//     return y
// }

// function plus(x,y) {
//     // x = Math.floor(Math.random()*10)
//     console.log(x)
//     // y = Math.floor(Math.random()*10)
//     console.log(y)
//     console.log(`x+Y = ${x+y}`)
// }

// // setInterval (randomNumberX ,1000)
// // setInterval (randomNumberY ,1000)
// setInterval ( plus(randomNumberX(),randomNumberY()) , 1000) 
// // 이코드를 실행하려면 어떻게 해야하나요?
// //////////////////////////////////////