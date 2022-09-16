const clock = document.querySelector('#clock')
console.log(clock)

const getClock = () => {
    const date = new Date()
    const getHours = String(date.getHours()).padStart(2,'0')
    const getMinutes = String(date.getMinutes()).padStart(2,'0')
    const getSeconds = String(date.getSeconds()).padStart(2,'0')

    const nowTime = `${getHours}:${getMinutes}:${getSeconds}`
    
    // const nowTime = getHours + getMinutes + getSeconds
    
    clock.innerHTML = nowTime
}
getClock()
setInterval(getClock, 1000)

