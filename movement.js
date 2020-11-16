// HEADER & ABOUT ME SETTING
const translatey = document.querySelectorAll(".translatey");
const translatel = document.querySelectorAll(".translatel");
const translater = document.querySelectorAll(".translater");

// disapear big-title effect
const big_title = document.querySelector(".big-title");
const header = document.querySelector("header");

// shadow effect, to let black shadow increase
const shadow = document.querySelector(".shadow"); 

// content & img effect, fistly to move up element location in style.css, and then to return it to its original place as scrolling the page in movement.js
const content = document.querySelector(".content");
const section = document.querySelector("section");
const image_container = document.querySelector(".imgContainer");

// content & img opacity effect
const opacity = document.querySelectorAll(".opacity");


// border effect
const border = document.querySelector(".border");

let header_height = header.offsetHeight;
let section_height = section.offsetHeight;

window.addEventListener('scroll', () => {
  let scroll = window.pageYOffset;

  // content effect
  let sectionY = section.getBoundingClientRect();

  translatey.forEach(element => { 
    let speed = element.dataset.speed;
    element.style.transform = `translateY(${scroll * speed}px)`;
  })
  translatel.forEach(element => { 
    let speed = element.dataset.speed;
    element.style.transform = `translateX(-${scroll * speed}px)`;
  })
  translater.forEach(element => { 
    let speed = element.dataset.speed;
    element.style.transform = `translateX(${scroll * speed}px)`;
  })

  // content & img opacity effect 
  opacity.forEach(element => {
    element.style.opacity = scroll / (sectionY.top + section_height );
  })



  // shadow effect, to let black shadow increase
  shadow.style.height = `${scroll * .5 + 300}px`;

  // content & img effect
  

})
// HEADER & ABOUT ME SETTING END

// SLIDER & PAGE NUMBER SETTING
const slides = document.querySelector('.slider').children;
const number = document.querySelector('.page-number').children;

const prev = document.querySelector('.left');
const next = document.querySelector('.right');

let index = 0;

next.addEventListener('click', function() {
  nextSlide()
});
prev.addEventListener('click', function() {
  prevSlide()
});

function nextSlide(){
  if(index == slides.length - 1){
    index = 0;
  }
  else {
    index++;
  }
  changeSlide();
  changeNumber();
}

function prevSlide(){
  if(index == 0){
    index = slides.length - 1;
  }
  else {
    index--;
  }
  changeSlide();
  changeNumber();
}

function changeSlide(){
  for(let i = 0; i < slides.length; i++){
    slides[i].classList.remove("active");
  }

  slides[index].classList.add("active");
}
function changeNumber(){
  for(let i = 0; i < number.length; i++){
    number[i].classList.remove("active");
  }

  number[index].classList.add("active");
}

// SLIDER SETTING END



// BACK TO TOP BOTTON SETTING
const rocket = document.querySelector('#back-button');

window.addEventListener("scroll", scrollFunction);
function scrollFunction() {
  if (window.pageYOffset > 100) {
    // show rocket button
    rocket.style.display = "block";
  }
  else  {
    rocket.style.display = "none";
  }
}
// back to top smoothly
rocket.addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  });
});
// BACK TO TOP BOTTON SETTING END



// CLICK TO COPY
const copyEmail = document.querySelector(".email");
const popup = document.querySelector(".popup");

copyEmail.addEventListener("click",() => {
  popup.classList.add("active");
  copyToClipboard();
});
popup.addEventListener("animationend", () => {
  popup.classList.remove("active");
});

function copyToClipboard(){
  const textare = document.createElement("textarea");
  textare.setAttribute("readonly", "");
  textare.value = "yumeee.lol@gmail.com";
  textare.style.position = "absolute";
  document.body.appendChild(textare);
  textare.select();
  document.execCommand("copy");
  document.body.removeChild(textare);
}
// CLICK TO COPY END

// PRELOADER
const preloader = document.querySelector('.preloader');
preloader.addEventListener("animationend", () => {
  // after preloader animation finished
  preloader.classList.add("finish");
});
