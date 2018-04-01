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

// DROP DOWN MENU

var activeDropdown = {};
document.getElementById('btn1').addEventListener('click',showDropdown);
document.getElementById('btn2').addEventListener('click', showDropdown);
document.getElementById('btn3').addEventListener('click',showDropdown);
document.getElementById('btn4').addEventListener('click', showDropdown); 
document.getElementById('btn5').addEventListener('click',showDropdown);
document.getElementById('btn6').addEventListener('click',showDropdown);
document.getElementById('btn1b').addEventListener('click',showDropdown);
document.getElementById('btn2b').addEventListener('click', showDropdown);
document.getElementById('btn3b').addEventListener('click',showDropdown);
document.getElementById('btn4b').addEventListener('click', showDropdown); 
document.getElementById('btn5b').addEventListener('click',showDropdown);

function showDropdown(event){
  if (activeDropdown.id && activeDropdown.id !== event.target.id) {
    activeDropdown.element.classList.remove('active');
  }

  for (var i = 0;i<this.children.length;i++){
    if (this.children[i].classList.contains('dropdown-selection')){
        activeDropdown.id = this.id;
        activeDropdown.element = this.children[i];
        this.children[i].classList.add('active');
     }
    //adding the dropdown-button to our object
    else if (this.children[i].classList.contains('dropdown-button')){
      activeDropdown.button = this.children[i];
    }
  }
}

var activeDropdownSearch = {};

document.getElementById('btn6').addEventListener('click', showDropdownSearch);

function showDropdownSearch(event){
  if (activeDropdownSearch.id && activeDropdownSearch.id !== event.target.id) {
    activeDropdownSearch.element.classList.remove('active');
  }

  for (var i = 0;i<this.children.length;i++){
    if (this.children[i].classList.contains('dropdown-selection-search')){
        activeDropdownSearch.id = this.id;
        activeDropdownSearch.element = this.children[i];
        this.children[i].classList.add('active');
     }
    //adding the dropdown-button to our object
    else if (this.children[i].classList.contains('dropdown-selection-search')){
      activeDropdownSearch.button = this.children[i];
    }
  }
}

window.onclick = function(event) {
  if (!event.target.classList.contains('dropdown-button') && !event.target.classList.contains('dropdown-button-search')) {
    activeDropdown.element.classList.remove('active');
    activeDropdownSearch.element.classList.remove('active');
  }
}

// БУРГЕР МЕНУ

var burgerMenu = document.querySelector('.burger-menu');
var burgerMenuDrop = document.querySelector('.burger-menu-drop');

burgerMenu.addEventListener('click', showBurgerMenuDrop);


function showBurgerMenuDrop() {
  if (burgerMenuDrop.classList.contains("burger-menu-click")) {
    burgerMenuDrop.classList.remove("burger-menu-click");
    burgerMenuDrop.classList.add("burger-menu-drop")
  }  else {
    burgerMenuDrop.classList.remove("burger-menu-drop");
    burgerMenuDrop.classList.add("burger-menu-click");
  }
};

