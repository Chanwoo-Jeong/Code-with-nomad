const API_KEY = 'b1581c63833eb15d2ba7179d359626a0'



function onGeoOK(supereme){
    const lat = supereme.coords.latitude;
    const lng = supereme.coords.longitude;
    console.log('you live in' , lat , lng)
    console.log(supereme)
    const url =  `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    console.log(url)
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector('#weather span:first-child')
        const city = document.querySelector('#weather span:last-child')
        city.innerText = data.name 
        weather.innerText = data.weather[0].main
    });
}
function onGeoError(){
    alert('Allow your location Please')
}

navigator.geolocation.getCurrentPosition( onGeoOK, onGeoError)
