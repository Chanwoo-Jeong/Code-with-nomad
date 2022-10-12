const button = document.getElementById("btn")
const Span = document.getElementById("span")
let counter = 0


const handleClick = () => {
    console.log("Im a button")
    counter += 1
    Span.innerText = `Total Clicks : ${counter}`
}
button.addEventListener("click", handleClick )