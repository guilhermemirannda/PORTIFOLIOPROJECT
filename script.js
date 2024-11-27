let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev');
let backButton = document.getElementById('back');
let seeMoreButtons = document.querySelectorAll('.see-more');
let carousel = document.querySelector('.carousel');
let listHTML = document.querySelector('.carousel .list');

let nextDetails = document.querySelectorAll('.next-details');
let prevDetails = document.querySelectorAll('.prev-details');
/* configura os botões de next e prev */
nextButton.onclick = function(){
    showSlider('next');
}
prevButton.onclick = function(){
    showSlider('prev');
}

/* torna a tela sensivel as teclas <- ->*/
/* verifica se a classe 'showDetail' não existe em carousel */
document.addEventListener('keyup', function(event){
    if (carousel.classList.contains('showDetail') != true){
        if (event.keyCode === 39 || event.keyCode === 68){
            showSlider('next');
    }
    }
});
document.addEventListener('keyup', function(event){
    if (carousel.classList.contains ('showDetail') != true){
        if (event.keyCode === 37 || event.keyCode === 65){
            showSlider('prev');
        }
    }
});
document.addEventListener('keyup', function(event){
    if (event.keyCode === 38 || event.keyCode === 87){
        carousel.classList.add('showDetail'); 
    }
});
document.addEventListener('keyup', function(event){
    if (event.keyCode === 40 || event.keyCode === 83){
        carousel.classList.remove('showDetail');
    }
});


/* clique nos botões */
let unAcceptClick;
const showSlider = (type) => {
    nextButton.style.pointerEvents = 'none';
    prevButton.style.pointerEvents = 'none';
    carousel.classList.remove('prev','next')
    let items = document.querySelectorAll('.carousel .list .item');
    if(type === 'next'){
        listHTML.appendChild(items[0]);
        carousel.classList.add('next');
    }else{
        let positionLast = items.length -1;
        listHTML.prepend(items[positionLast]);
        carousel.classList.add('prev');
    }
    clearTimeout(unAcceptClick);
    unAcceptClick = setTimeout(() =>{ 
        nextButton.style.pointerEvents = 'auto';
        prevButton.style.pointerEvents = 'auto';
    }, 300);
}

const showSliderDetails = (type) => {
    nextButton.style.pointerEvents = 'none';
    prevButton.style.pointerEvents = 'none';
    carousel.classList.remove('prev','next')
    let detailsItems = document.querySelectorAll('.carousel .list .item .details-carousel .detail');
    if(type === 'next'){
        listHTML.appendChild(items[0]);
        carousel.classList.add('next');
    }else{
        let positionLast = items.length -1;
        listHTML.prepend(items[positionLast]);
        carousel.classList.add('prev');
    }
    clearTimeout(unAcceptClick);
    unAcceptClick = setTimeout(() =>{ 
        nextButton.style.pointerEvents = 'auto';
        prevButton.style.pointerEvents = 'auto';
    }, 300);
}


seeMoreButtons.forEach(button =>{
    button.onclick = function(){
        carousel.classList.add('showDetail');
    }
})
backButton.onclick = function(){
    carousel.classList.remove('showCards');
    carousel.classList.remove('showDetail');
}

nextDetails.forEach(button => {
    button.onclick = function(){
        if (carousel.classList.contains('showDetail')){
            carousel.classList.add('showCards');
        }
    }
});
prevDetails.forEach(button =>{
    button.onclick = function(){
        carousel.classList.remove('showCards');
    }
});