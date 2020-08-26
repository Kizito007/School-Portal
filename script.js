// Sidenav function
const openNav = () => {
    document.getElementById("sidenav").style.width = "250px";
    document.getElementById("openbutton").style.display = "hidden";
    document.getElementById("main").style.opacity = "0.75"
};
const closeNav = () => {
    document.getElementById("sidenav").style.width = "0px";
    document.getElementById("openbutton").style.display = "inline";
    document.getElementById("main").style.opacity = "1"
}

/*================================================
        SLIDESHOW FUNCTIONS
==================================================*/  
/*var slide_index = 1;  
displaySlides(slide_index);  

function nextSlide(n) {  
    displaySlides(slide_index += n);  
}  

function currentSlide(n) {  
    displaySlides(slide_index = n);  
}  

function displaySlides(n) {  
    var i;  
    var slides = document.getElementsByClassName("showSlide");  
    if (n > slides.length) { slide_index = 1 }  
    if (n < 1) { slide_index = slides.length }  
    for (i = 0; i < slides.length; i++) {  
        slides[i].style.display = "none";  
    }  
    slides[slide_index - 1].style.display = "block";  
}*/    
