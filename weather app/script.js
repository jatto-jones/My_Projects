const api = {
    key: "1677635e43452c900d88980e89b7b1b1",
    base: "https://api.openweathermap.org/data/2.5/"
}
const search = document.querySelector(".search")
const btn = document.querySelector(".btn")
btn.addEventListener("click", getInput)

function getInput(event){
    event.preventDefault()
    if(event.type == "click") {
        getData(search.value)
    }
}


function getData(){
    fetch(`${api.base}weather?q=${search.value}&units=metric&appid=${api.key}`)
        .then(response => {
            return response.json()
        }).then(displayData)
        
}

function displayData(response){
    console.log(response)
    if (response.cod === "404"){
        alert("Please enter a valid city")
        search.value = ""
    }else{
        const city = document.querySelector(".city")
        city.textContent = `${response.name}, ${response.sys.country}`

        const today = new Date()
        const date = document.querySelector(".date")
        date.textContent = dateFunction(today)

        const temp = document.querySelector(".temp")
        temp.textContent = `Temp: ${Math.round(response.main.temp)} °C`
        const weather = document.querySelector(".weather")
        weather.textContent = `Weather: ${response.weather[0].main}`

        const tempRange = document.querySelector(".temp-range")
        tempRange.textContent = `Temp Range: ${Math.round(response.main.temp_min)}°C / ${Math.round(response.main.temp_max)}°C`

        const weatherIcon = document.querySelector(".weather-icon")
        const iconURL = "http://openweathermap.org/img/w/"
        weatherIcon.src = iconURL + response.weather[0].icon + ".png"

        search.value = ""
    }
    
}
function dateFunction(d){
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"]
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    let day = days[d.getDay()]
    let date = d.getDate()
    let month = months[d.getMonth()]
    // let year = d.getfullYear()

    return `${day}, ${date} ${month}, 2023`
}