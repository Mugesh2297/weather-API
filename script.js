//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=6a632da5b193d8fe101da468b2ef028f
//622a913927795a289c8aa110c3768527

var weatherContainer = document.getElementById("weatherContainer")


async function getWeatherData(){

    var city = document.getElementById('cityName').value
    console.log(city)
    if(city===""){
        alert("Enter a City Name")
    }
    let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6a632da5b193d8fe101da468b2ef028f`)
    let res= await data.json()
    console.log(res)

    let weather = document.getElementById('weatherContainer') 
    weather.innerHTML=`<div class="row g-0">
    <div class="col-md-4">
      <img src="https://static01.nyt.com/images/2014/12/11/technology/personaltech/11machin-illo/11machin-illo-articleLarge-v3.jpg?quality=75&auto=webp&disable=upscale" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Weather of ${city}</h5>
        <p class="card-text"><small class="text-muted">wind speed: ${res.wind.speed}</small></p>
        <p class="card-text"><small class="text-muted">Humidity: ${res.main.humidity}</small></p>
        <p class="card-text"><small class="text-muted">Temperature: ${res.main.temp}</small></p>
        <p class="card-text"><small class="text-muted">Pressure: ${res.main.humidity}</small></p>
      </div>
    </div>
  </div>
</div>`


}
