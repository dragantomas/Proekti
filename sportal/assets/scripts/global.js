window.onload = function() {addHomeHover()};

// STICKY NAVBAR

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



// REMOVE NASLOVNA STIL

document.getElementById("db1").addEventListener("mouseover", removeHomeHover);
document.getElementById("db1").addEventListener("mouseout", addHomeHover);
document.getElementById("db2").addEventListener("mouseover", removeHomeHover);
document.getElementById("db2").addEventListener("mouseout", addHomeHover);
document.getElementById("db3").addEventListener("mouseover", removeHomeHover);
document.getElementById("db3").addEventListener("mouseout", addHomeHover);
document.getElementById("db4").addEventListener("mouseover", removeHomeHover);
document.getElementById("db4").addEventListener("mouseout", addHomeHover);
document.getElementById("db5").addEventListener("mouseover", removeHomeHover);
document.getElementById("db5").addEventListener("mouseout", addHomeHover);
document.getElementById("db6").addEventListener("mouseover", removeHomeHover);
document.getElementById("db6").addEventListener("mouseout", addHomeHover);
document.getElementById("db7").addEventListener("mouseover", removeHomeHover);
document.getElementById("db7").addEventListener("mouseout", addHomeHover);
document.getElementById("db8").addEventListener("mouseover", removeHomeHover);
document.getElementById("db8").addEventListener("mouseout", addHomeHover);
document.getElementById("dbs").addEventListener("mouseover", removeHomeHover);
document.getElementById("dbs").addEventListener("mouseout", addHomeHover);

document.getElementById("dc1").addEventListener("mouseover", removeHomeHover);
document.getElementById("dc1").addEventListener("mouseout", addHomeHover);
document.getElementById("dc2").addEventListener("mouseover", removeHomeHover);
document.getElementById("dc2").addEventListener("mouseout", addHomeHover);
document.getElementById("dc3").addEventListener("mouseover", removeHomeHover);
document.getElementById("dc3").addEventListener("mouseout", addHomeHover);
document.getElementById("dc4").addEventListener("mouseover", removeHomeHover);
document.getElementById("dc4").addEventListener("mouseout", addHomeHover);
document.getElementById("dc6").addEventListener("mouseover", removeHomeHover);
document.getElementById("dc6").addEventListener("mouseout", addHomeHover);
document.getElementById("dbs1").addEventListener("mouseover", removeHomeHover);
document.getElementById("dbs1").addEventListener("mouseout", addHomeHover);


function removeHomeHover(){
  document.getElementById("homebtn").style.background = "#0085ca";
  document.getElementById("homebtn").style.borderBottom = "2px solid #00204a";

};

function addHomeHover(){
  document.getElementById("homebtn").style.background = "#00204a";
  document.getElementById("homebtn").style.borderBottom = "2px solid #0085ca";
};



function showComments() {
    var x = document.getElementById("comments");
    var y = document.getElementById("povrzani-vesti");
    if (x.style.display === "none") {
      x.style.display = "block";
      y.style.display = "none";
    } else {
      x.style.display = "none";
      y.style.display = "block";
  }
}

function showBasket() {
  var x = document.getElementById("ss-link-basket");
  var y = document.getElementById("cub");
  var z = document.getElementById("cdb");
    if (x.style.display === "none") {
      x.style.display = "block";
      y.style.display = "block";
      z.style.display = "none";
    } else {
      x.style.display = "none";
      y.style.display = "none";
      z.style.display = "block";
  }
}

function showHandball() {
  var x = document.getElementById("ss-link-handball");
  var y = document.getElementById("cuh");
  var z = document.getElementById("cdh");
  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "block";
    z.style.display = "none";
  } else {
    x.style.display = "none";
    y.style.display = "none";
    z.style.display = "block";
  }
}

function showHockey() {
  var x = document.getElementById("ss-link-hockey");
  var y = document.getElementById("cuho");
  var z = document.getElementById("cdho");
  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "block";
    z.style.display = "none";
  } else {
    x.style.display = "none";
    y.style.display = "none";
    z.style.display = "block";
  }
}

function showVolley() {
  var x = document.getElementById("ss-link-volley");
  var y = document.getElementById("cuv");
  var z = document.getElementById("cdv");
  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "block";
    z.style.display = "none";
  } else {
    x.style.display = "none";
    y.style.display = "none";
    z.style.display = "block";
  }
}

function showTennis() {
  var x = document.getElementById("ss-link-tennis");
  var y = document.getElementById("cut");
  var z = document.getElementById("cdt");
  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "block";
    z.style.display = "none";
  } else {
    x.style.display = "none";
    y.style.display = "none";
    z.style.display = "block";
  }
}

function showMoto() {
  var x = document.getElementById("ss-link-moto");
  var y = document.getElementById("cum");
  var z = document.getElementById("cdm");
  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "block";
    z.style.display = "none";
  } else {
    x.style.display = "none";
    y.style.display = "none";
    z.style.display = "block";
  }
}

function showMix() {
  var x = document.getElementById("ss-link-mix");
  var y = document.getElementById("cumi");
  var z = document.getElementById("cdmi");
  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "block";
    z.style.display = "none";
  } else {
    x.style.display = "none";
    y.style.display = "none";
    z.style.display = "block";
  }
}
