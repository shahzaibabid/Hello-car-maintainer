/* NavBar to turn transparent at the top of the webpage */
var nav = document.getElementById('n');

window.onscroll = function() {
    if (window.pageYOffset > 100) {
        nav.style.background = "#111";
    }
    else {
        nav.style.background = "transparent"
        nav.style.transition = "background 0.5s ease"
    }
}

/* NavBar to be responsive */
function myFunction() {
    var x = document.getElementById("mNav");
    if (x.className === "mobileNav") {
        x.className += " responsive";
    }
    else {
        x.className = "mobileNav";
    }
}

/* Slideshow */
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 3500); // Change image every 3.5 seconds
}