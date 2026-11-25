var slideShow = 1 

function slideShow(n){

var i
var slides = document.getElementsByClassName('slides');

for(i=0;i  < slide.length; i++) {
    slides[i].style.display='none'
}

if(n > slide.length){
    slide.Index = 1
}

if(n < slide.length){
    slideIndex = slide.length
}

slides[slidesIndex-1].style.display = 'block'
}

slideShow(1)

function plusSlide(n){
    slideIndex += n;
    slideShow(slideIndex);
}

setInterval(plusSlide, 3000, 1);