// / STICKY NAVBAR

window.onscroll = function () { myFunction() };


var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

document.getElementById("db5").style.background = "#00204a";
document.getElementById("db5").style.borderBottom = "2px solid #0085ca";

document.getElementById("homebtn").style.background = "#0085ca";
document.getElementById("homebtn").style.borderBottom = "2px solid #00204a";


document.getElementById("homebtn").addEventListener("mouseover", addHomeHover);
document.getElementById("homebtn").addEventListener("mouseout", removeHomeHover);
document.getElementById("homebtn").addEventListener("mouseout", removeHomeHoverFoto);
document.getElementById("db1").addEventListener("mouseover", removeHomeHoverFoto);
document.getElementById("db1").addEventListener("mouseout", addHomeHoverFoto);
document.getElementById("db2").addEventListener("mouseover", removeHomeHoverFoto);
document.getElementById("db2").addEventListener("mouseout", addHomeHoverFoto);
document.getElementById("db3").addEventListener("mouseover", removeHomeHoverFoto);
document.getElementById("db3").addEventListener("mouseout", addHomeHoverFoto);
document.getElementById("db4").addEventListener("mouseover", removeHomeHoverFoto);
document.getElementById("db4").addEventListener("mouseout", addHomeHoverFoto);
document.getElementById("db5").addEventListener("mouseover", addHomeHoverFoto);
document.getElementById("db5").addEventListener("mouseout", removeHomeHoverFoto);
document.getElementById("db6").addEventListener("mouseover", removeHomeHoverFoto);
document.getElementById("db6").addEventListener("mouseout", addHomeHoverFoto);
document.getElementById("db7").addEventListener("mouseover", removeHomeHoverFoto);
document.getElementById("db7").addEventListener("mouseout", addHomeHoverFoto);
document.getElementById("db8").addEventListener("mouseover", removeHomeHoverFoto);
document.getElementById("db8").addEventListener("mouseout", addHomeHoverFoto);
document.getElementById("dbs").addEventListener("mouseover", removeHomeHoverFoto);
document.getElementById("dbs").addEventListener("mouseout", addHomeHoverFoto);

document.getElementById("dc1").addEventListener("mouseover", removeHomeHoverFoto);
document.getElementById("dc1").addEventListener("mouseout", addHomeHoverFoto);
document.getElementById("dc2").addEventListener("mouseover", removeHomeHoverFoto);
document.getElementById("dc2").addEventListener("mouseout", addHomeHoverFoto);
document.getElementById("dc3").addEventListener("mouseover", removeHomeHoverFoto);
document.getElementById("dc3").addEventListener("mouseout", addHomeHoverFoto);
document.getElementById("dc4").addEventListener("mouseover", removeHomeHoverFoto);
document.getElementById("dc4").addEventListener("mouseout", addHomeHoverFoto);
document.getElementById("dc6").addEventListener("mouseover", removeHomeHoverFoto);
document.getElementById("dc6").addEventListener("mouseout", addHomeHoverFoto);
document.getElementById("dbs1").addEventListener("mouseover", removeHomeHoverFoto);
document.getElementById("dbs1").addEventListener("mouseout", addHomeHoverFoto);



function addHomeHoverFoto() {
    document.getElementById("db5").style.background = "#00204a";
    document.getElementById("db5").style.borderBottom = "2px solid #0085ca";
};

function removeHomeHoverFoto() {
    document.getElementById("db5").style.background = "#0085ca";
    document.getElementById("db5").style.borderBottom = "2px solid #00204a";
};

function removeHomeHover() {
    document.getElementById("homebtn").style.background = "#0085ca";
    document.getElementById("homebtn").style.borderBottom = "2px solid #00204a";
};

function addHomeHover() {
    document.getElementById("homebtn").style.background = "#00204a";
    document.getElementById("homebtn").style.borderBottom = "2px solid #0085ca";
};

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("f-slides");
    // var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";

}

function openModal() {
    document.getElementById('myModal').style.display = "block";
}

function closeModal() {
    document.getElementById('myModal').style.display = "none";
}

var slideIndexLb = 1;
showSlidesLb(slideIndexLb);

function plusSlidesLb(n) {
    showSlidesLb(slideIndexLb += n);
}

function currentSlideLb(n) {
    showSlidesLb(slideIndexLb = n);
}

function showSlidesLb(n) {
    var i;
    var slidesLb = document.getElementsByClassName("f-slides-lb");

    if (n > slidesLb.length) { slideIndexLb = 1 }
    if (n < 1) { slideIndexLb = slidesLb.length }
    for (i = 0; i < slidesLb.length; i++) {
        slidesLb[i].style.display = "none";
    }

    slidesLb[slideIndexLb - 1].style.display = "block";
}

