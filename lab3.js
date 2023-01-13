// const API_KEY = `db692c820d5d5e1d2f2a2f8b01883185`

const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`
const btn = document.querySelector(".btn-search")
const search = document.querySelector("#search")
const weather = document.querySelector("#weather")

const getWeather = async (city) => {
    weather.innerHTML = `<h2 class="load"> Loading... <h2>`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const response = await fetch(url);
    const data = await response.json()
    return showWeather(data)
}

const showWeather = (data) => {
    if (data.cod == "404") {
        weather.innerHTML = `<h2 class="notfound"> City Not Found <h2>`
        return;
    }
    weather.innerHTML = `
    <div class="card" id="cont" style="width: 18rem;">
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${data.main.temp} ℃</h5>
                <h4 class="card-text"> ${data.weather[0].main} </h4>
            </div>
        </div>    
        `
}

btn.addEventListener(
    "click",
    function (event) {
        getWeather(search.value)
        event.preventDefault();
    }
)