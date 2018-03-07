window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

var searchBox = document.getElementById("searchBox");

searchBox.addEventListener("click", function(e){
	searchBoxOpen(e)
});

// document.querySelector(".search_form").addEventListener("submit", event => {
// 	event.preventDefault();
// })

function searchBoxOpen(e) {
	e.stopPropagation();
	document.querySelector(".searchfield").classList.add("expand");
	document.getElementById("searchBox2").classList.add("showsearch");
	this.style.visibility="hidden";

}

document.body.addEventListener("click", function(){
	document.querySelector(".searchfield").classList.remove("expand");
	document.getElementById("searchBox2").classList.remove("showsearch");
	searchBox.style.visibility="visible";
});

document.querySelector(".searchfield").addEventListener("click", function(e){
	e.stopPropagation();
})
