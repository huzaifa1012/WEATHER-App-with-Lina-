


const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`
// const API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`










let search = document.querySelector("#search-weather")
let form = document.querySelector("form")

form.addEventListener("submit", searchCity)
function searchCity(event) {
    getWeather(search.value)
    event.preventDefault();

}
const getWeather = async (city) => {
    // let IMG_URL = `https: //openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    let response = await fetch(url)
    let data = await response.json()
    console.log(data)
    return showWeather(data)
}
function showWeather(data) {
    let form = document.querySelector("#search-weather")
    let h1 = document.querySelector("#h1")
    let h2 = document.querySelector("#weather")
    let location = document.querySelector("#location")
    let degree = `&#8451`
    
    if (data.cod == "404") {
        h1.innerHTML = "404"
        h2.innerHTML = "  Location Not Found "
        location.innerHTML= "none" 
    }
    else {
        location.innerHTML= "("+form.value+")" 
        h1.innerHTML = data.main.temp + degree
        h2.innerHTML = data.weather[0].description
    }
}


