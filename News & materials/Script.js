//let city = prompt("Enter your city: ");
/*
$(document).ready(function(){
    $("select.select_city").change(function(){
        var selectedCountry = $(this).children("option:selected").val();
        alert("You have selected the country - " + selectedCountry);
    });
});
var cityy = "Lahore";
$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + selectedCountry + "&units=metric&APPID=d89208ad904d31a4402384ff1d4d1a2f",

    function(data){
        console.log(data);

        var icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
        $('.icon').attr("src", icon);

        var temp = Math.round(data.main.temp);
        $('.temp').append(temp);

        var weather = data.weather[0].main;
        $('.weather').append(weather);

        var city = data.name;
        $('.city').append(city);
    });
*/
/*let city = prompt("enter your city: ");
const cities = ["astana", "almaty", "aktobe", "uralsk", "shymkent" ]
let current = "";
let apiKey = '&APPID=de2953ca030b36daedfbd6bd44fca593';
for (let i=0;i< cities.length;i++){
    if (cities[i].equals(document.querySelector('.astana'))){
        current = cities[i];
    }
}*/
let city = prompt("enter your city: ");
let apiKey = '&APPID=de2953ca030b36daedfbd6bd44fca593';
let requestEndPoint ='https://api.openweathermap.org/data/2.5/weather';
requestEndPoint+='?q='+city;
requestEndPoint+='&units=metric';
requestEndPoint+=apiKey;
fetch(requestEndPoint)//interface to work with query & answers http
 // fetch('https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&APPID=d89208ad904d31a4402384ff1d4d1a2f')
        .then(function (resp){return resp.json()})
        .then(function (data){
                console.log(data);
                document.querySelector('.city').textContent = data.name; //selecting elements from html and querying the data
                //document.querySelector('.data-t').textContent = data.timezone;
                document.querySelector('.api-desc').textContent = data.weather.description;
                document.querySelector('.deg').textContent = data.main.temp;
                document.querySelector('.moisture2').textContent = data.main.humidity;
                document.querySelector('.country').textContent = data.sys.country;
                document.querySelector('.feelsLike').textContent = data.main.feels_like;
                document.querySelector('.rain-vol').textContent=data.clouds.all;
                //document.querySelector('.data-t').textContent =data.city.sun.rise;
               // document.querySelector('.last-up').textContent=data.lastupdate.value;


});
/*function apiStart(){
    let city = prompt("Please enter your city:");
    if(city != null){
        let apiKey = '&APPID=de2953ca030b36daedfbd6bd44fca593';
        let requestEndPoint ='https://api.openweathermap.org/data/2.5/weather';
        requestEndPoint+='?q='+city;
        requestEndPoint+='&units=metric';
        requestEndPoint+=apiKey;
        fetch(requestEndPoint)//interface to work with query & answers http
            // fetch('https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&APPID=d89208ad904d31a4402384ff1d4d1a2f')
            .then(function (resp){return resp.json()})
            .then(function (data){
                console.log(data);
                document.querySelector('.city').textContent = data.name; //selecting elements from html and querying the data
                //document.querySelector('.data-t').textContent = data.timezone;
                document.querySelector('.api-desc').textContent = data.weather.description;
                document.querySelector('.deg').textContent = data.main.temp;
                document.querySelector('.moisture2').textContent = data.main.humidity;
                document.querySelector('.country').textContent = data.sys.country;
                document.querySelector('.feelsLike').textContent = data.main.feels_like;
                document.querySelector('.rain-vol').textContent=data.clouds.all;
                //document.querySelector('.data-t').textContent =data.city.sun.rise;
                // document.querySelector('.last-up').textContent=data.lastupdate.value;
            });
 let result = '<div className="section text-center">';
    result+= '<div className="section-content grid-container grid-1-1 grid-reverse mobile-padding">';
        result+='<div>'
            result+='<p><span className="orange-text data-t"></span></p>';
         result+= '  <h2 style="margin-top: 0;" className="text-center"><span className="orange-text city"></span>, <span className="country"></span></h2> </div>';
       result+= '<div> <h4><span className="silver deg"></span>°С <span className="api-desc"></span></h4><h6>Feels like: <span className="feelsLike"></span>°С </h6>';
result+='  <h6>Humidity: <span className="moisture2"></span>% Cloudiness: <span className="rain-vol"></span>% </h6>';
result+= '</div></div></div>';
let need = document.getElementById('#city') + ', ';
alert(need);
    }
*/
