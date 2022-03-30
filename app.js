var input = document.querySelector('.input_text');
var input2 = document.querySelector('.input_review')
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var review = document.querySelector('.review')
var button= document.querySelector('.submit');
var button2=document.querySelector('.submit2')
var feelLike=document.querySelector('.feelLike')

button2.addEventListener('click', function(name2){
 var reviewValue = input2.value
 const newLI = document.createElement('li')
 newLI.textContent = "- "+reviewValue;
 
 review.append(newLI)
 
 
  input2.value = "Review Submitted"
})



button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&units=imperial&appid=50a7aa80fa492fa92e874d23ad061374')
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp'];
  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'];
  var feelValue = data.main.feels_like;

  main.innerHTML = nameValue;
  desc.innerHTML = "Desc  : "+descValue;
  temp.innerHTML = "Temp  : "+tempValue+" °F";
  feelLike.innerHTML= "Feels like  : "+feelValue+" °F"
  input.value = "";
  console.log(data)

})
.catch(err => alert("Wrong city name!"));
})



