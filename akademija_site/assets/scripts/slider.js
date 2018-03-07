var slideIndex = 0;
showSlides();
var slides,dots;

function plusSlides(position) {
    slideIndex += position;
    if (slideIndex > slides.length) {slideIndex = 1}
    else if(slideIndex < 1){slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");

      }
        slides[slideIndex-1].style.display = "block";  
        dots[slideIndex-1].className += " active";
    }

function currentSlide(index) {
    if (index > slides.length) {index = 1}
    else if(index < 1){index = slides.length}
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
        slides[index-1].style.display = "block";  
        dots[index-1].className += " active";
    }

function showSlides() {
    var i;
    slides = document.getElementsByClassName("mySlides");
    dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

var slideIndexP = 1;
showDivs(slideIndexP);

function plusDivs(n) {
  showDivs(slideIndexP += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("ProfmySlides");
  if (n > x.length) {slideIndexP = 1}    
  if (n < 1) {slideIndexP = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndexP-1].style.display = "block";  
}


var slideIndexSt = 1;
showDivsSt(slideIndexSt);

function plusDivsSt(n) {
  showDivsSt(slideIndexSt += n);
}

function showDivsSt(n) {
  var i;
  var x = document.getElementsByClassName("StudmySlides");
  if (n > x.length) {slideIndexSt = 1}    
  if (n < 1) {slideIndexSt = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndexSt-1].style.display = "block";  
}
