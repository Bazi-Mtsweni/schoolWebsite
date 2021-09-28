const nav = document.querySelector(".link-items");
const navBtn = document.querySelector(".menu-btn");
const menuIcon = document.querySelector('.fas');
const slideImage = document.querySelectorAll(".slide-image");
const slideContainer = document.querySelector(".slide");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const navDots = document.querySelector(".nav-dots");

let imageNum = slideImage.length;
let slideWidth = slideImage[0].clientWidth;
let currentSlide = 0;

navBtn.addEventListener('click', () => {
    nav.classList.toggle('show');
    if (menuIcon.classList.contains('fa-bars')) {
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-times');
    }
    else {
        menuIcon.classList.remove('fa-times');
        menuIcon.classList.add('fa-bars');
    }
})

// Image Slide for Gallery Page

function init() {
    /*
    


    slideImage[0] = 0
    slideImage[1] = 100%
    slideImage[2] = 200%
    
    */

    slideImage.forEach(function(img, i){
        img.style.left = i * 100 + "%";
    });

    slideImage[0].classList.add("active");

    createNavDots();
}

init();

// Navigation Dots

function createNavDots() {
    for (let i = 0; i < imageNum; i++) {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        navDots.appendChild(dot);
    }

    navDots.children[0].classList.add("active");
}

// Next BUtton

nextBtn.addEventListener('click', function (){

    if(currentSlide >= imageNum - 1){
        goToSlide(0);
        // currentSlide = 0; 
        return;
    }

    currentSlide++;
     goToSlide(currentSlide);
})

// Previous Button

prevBtn.addEventListener('click', function (){

    if(currentSlide <= 0){
        goToSlide(imageNum - 1);
        // currentSlide = imageNum - 1;
        return;
    }

    currentSlide--;
     goToSlide(currentSlide);
})

function goToSlide(slideNumber) {
    slideContainer.style.transform = "translateX(-" + slideWidth * slideNumber + "px)";

    currentSlide = slideNumber

    setActiveClass();
}

// Set Active Image

function setActiveClass() {
    let currentImage = document.querySelector(".slide-image.active");
    currentImage.classList.remove("active");
    slideImage[currentSlide].classList.add("active");

    let currentDot = document.querySelector(".dot.active");
    currentDot.classList.remove("active");
    navDots.children[currentSlide].classList.add("active");


}