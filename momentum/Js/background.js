const images = [
    'wallpaper.jpg',
    'wallpaper2.jpg',
    'wallpaper3.jpg',
    'wallpaper4.jpg',
    'wallpaper5.jpg',
    'wallpaper6.png',
    'wallpaper7.png',
    'wallpaper9.png',
    'wallpaper10.png',
    'wallpaper11.png',
    'wallpaper12.png',
    'wallpaper13.png',
    'wallpaper14.png',
]

// const background = document.body

// let randomBackImages
// const randomI = () => {
//     randomBackImages = images[Math.floor(Math.random() * images.length)]
//     return randomBackImages
// }

// const Bgimg =  document.createElement('img')
// const showimg = () => {
//     console.log(randomBackImages)
//     Bgimg.src =  `img/wallpaper/landscape/${randomBackImages}`
//     Bgimg.style.width = '500px'
//     Bgimg.style.height = '300px' 
//     document.body.appendChild(Bgimg)   
// }
// setInterval(randomI, 2000)
// setInterval(showimg, 2000)

// // console.log(randomBackImages)
// // background.style.backgroundImage = `url("../momentum/img/wallpaper/landscape/${randomBackImages}")`


// // bgImage.src = `img/wallpaper/landscape/${randomBackImages}`
// // bgImage.style.width = '500px'
// // bgImage.style.height = '300px'


// // document.body.appendChild(bgImage)
// // console.log(bgImage)




let randomBackImages
const bgImage = document.createElement('img');

const randomI = () => {
    randomBackImages = images[Math.floor(Math.random() * images.length)]
    bgImage.src = `img/wallpaper/landscape/${randomBackImages}`
    bgImage.style.width = '500px'
    bgImage.style.height = '300px'
    document.body.appendChild(bgImage)
}

randomI()
setInterval(randomI, 3000)


