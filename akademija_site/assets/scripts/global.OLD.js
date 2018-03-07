function myFunction1() {
    document.getElementById("myDropdown1").classList.toggle("show1");
}

//for 2nd dropdown
function myFunction2() {
    document.getElementById("myDropdown2").classList.toggle("show2");
}


function myFunction3() {
    document.getElementById("myDropdown3").classList.toggle("show3");
}

function myFunction4() {
    document.getElementById("myDropdown4").classList.toggle("show4");
}

function myFunction5() {
    document.getElementById("myDropdown5").classList.toggle("show5");
}

function myFunction6() {
    document.getElementById("myDropdown6").classList.toggle("show6");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn1')) {
    var dropdowns = document.getElementsByClassName("dropdown-content1");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show1')) {
            openDropdown.classList.remove('show1');
        }
    }
  }
  
  if (!event.target.matches('.dropbtn2')) {

    var dropdowns = document.getElementsByClassName("dropdown-content2");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show2')) {
            openDropdown.classList.remove('show2');
        }
    }
  }
  
  if (!event.target.matches('.dropbtn3')) {

    var dropdowns = document.getElementsByClassName("dropdown-content3");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show3')) {
            openDropdown.classList.remove('show3');
        }
    }
  }

  if (!event.target.matches('.dropbtn4')) {

    var dropdowns = document.getElementsByClassName("dropdown-content4");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show4')) {
            openDropdown.classList.remove('show4');
        }
    }
  }

  if (!event.target.matches('.dropbtn5')) {

    var dropdowns = document.getElementsByClassName("dropdown-content5");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show5')) {
            openDropdown.classList.remove('show5');
        }
    }
  }

  if (!event.target.matches('.dropbtn6')) {

    var dropdowns = document.getElementsByClassName("dropdown-content6");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show6')) {
            openDropdown.classList.remove('show6');
        }
    }
  }
}

  var slideIndex = 0;
  var slides = document.getElementsByClassName("mySlides");

showSlides();

function showSlides() {    
    var i;    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1} 
    slides[slideIndex-1].style.display = "block"; 
    setTimeout(showSlides, 8000); // Change image every 5 seconds
}

function currentSlide(no) {
    var i;    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    slideIndex = no;
    slides[no-1].style.display = "block";
}

function plusSlides(n) {
  var newslideIndex = slideIndex + n;
  if(newslideIndex < 4 && newslideIndex > 0){
     currentSlide(newslideIndex);
  }
}