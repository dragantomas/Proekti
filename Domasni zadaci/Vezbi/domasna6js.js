document.getElementById("osvezi").addEventListener("click", function(e){

var grad = document.getElementById("grad").value;
    
    if(grad.length == 0) {
      alert("Внеси град");
    
    }else{
        var apiKey = "59abe6985130dc16cd5c166c3af3e513";
        var url = "http://api.openweathermap.org/data/2.5/weather?q=" + grad + "&APPID=" + apiKey + "&units=metric";
        fetch(url)

	        .then(function(response){
	              return response.json();    
	        })

        	.then(function(data){

		console.log(data);

document.getElementById("temperatura").innerHTML = data.main.temp + ' °C';

document.getElementById("temp-min").innerHTML = data.main.temp_min + ' °C';

document.getElementById("temp-max").innerHTML = data.main.temp_max + ' °C';

document.getElementById("izbran-grad").innerHTML = grad;

			})

		}

})