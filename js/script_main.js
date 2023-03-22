'use strict';

let numSlide = 0;
const slider = document.querySelector('.photos');
slider.style.left = '60vw';
const sizeSlider = document.querySelectorAll('.photos img').length;

// ДОБАВЛЕНИЕ ТОЧЕК СНИЗУ

for (let i = 0; i < sizeSlider; i++) {
    numSlide == i
        ?
        document.querySelector('.markers').innerHTML += `<div class='marker active' id='${i}'></div>`
        :
        document.querySelector('.markers').innerHTML += `<div class='marker' id='${i}'></div>`;
}

function changeActiveMarker(newActiveSlide) {
    const markersList = document.querySelectorAll('.marker');
    markersList[numSlide].classList.remove('active');
    markersList[newActiveSlide].classList.add('active');
}

// ВЫПОЛНЕНИЕ ПРОМОТКИ ПО НАЖАТИЮ НА ТОЧКУ

const markersListToTap = document.querySelector('.markers');
markersListToTap.addEventListener('click', (e) => {
    if (e.target.closest('.marker')) {
        const idClickMarker = parseInt(e.srcElement.id)
        if (idClickMarker == 0) {
            slider.style.left = '60vw';
        } else if (idClickMarker == sizeSlider - 1) {
            slider.style.left = `${(idClickMarker - 1) * -60}vw`;
        } else {
            slider.style.left = `${idClickMarker * 60 - 60}vw`;
        }
        changeActiveMarker(idClickMarker);
        numSlide = idClickMarker;
    }
})

// НАЖАТИЕ НА КНОПКИ ПЕРЕКЛЮЧЕНИЯ СЛАЙДОВ

function nextSlide() {
    if (numSlide != 2) {
        slider.style.left = `${parseFloat(slider.style.left) - 60}vw`;
        changeActiveMarker(numSlide + 1)
        numSlide++;
    } else {
        slider.style.left = '60vw';
        changeActiveMarker(0)
        numSlide = 0;
    }
    console.log(numSlide);
}

function previousSlide() {
    if (numSlide != 0) {
        slider.style.left = `${parseFloat(slider.style.left) + 60}vw`;
        changeActiveMarker(numSlide - 1)
        numSlide--;
    } else {
        slider.style.left = `${(sizeSlider - 2) * -60}vw`;
        changeActiveMarker(2)
        numSlide = 2;
    }
    console.log(numSlide);
}

const rightButton = document.querySelector('.rightButton');
rightButton.addEventListener('click', nextSlide)

const leftButton = document.querySelector('.leftButton');
leftButton.addEventListener('click', previousSlide);

// ПРОМОТКА СЛАЙДОВ С ИНТЕРВАЛОМ И ОСТАНОВКА ИХ ПРОМОТКИ

let intervalSliding;

slider.addEventListener('mouseover', (e) => {
    clearInterval(intervalSliding);
    console.log(e);
})

slider.addEventListener('mouseout', (e) => {
    intervalSliding = setInterval(nextSlide, 4000);
});




// function numOfActiveSlide() {
//     const photosList = document.querySelectorAll('.slide');
//     const activeSlide = document.querySelector('.active');
//     for (let i = 0; i < photosList.length; i++) {
//         if (photosList[i].className == activeSlide.className) {
//             return i;
//         };
//     };
// };

// // ДОБАВЛЕНИЕ ОПРЕДЕЛЕННОГО КОЛИЧЕСТВА МАРКЕРОВ СЛАЙДЕРА
// const slides = document.querySelectorAll('.slide')
// const countSlides = slides.length;
// const markers = document.querySelector('.markers');
// for (let i = 0; i < countSlides; i++) {
//     let newMarker = document.createElement('div');
//     newMarker.classList.add('marker');
//     if (numOfActiveSlide() == i) {
//         newMarker.classList.add('active');
//     };
//     markers.append(newMarker);
// };

// function addColoringOnMarker() {
//     const markerList = document.querySelectorAll('.marker');

// };

// addColoringOnMarker();



// // КЛИК НА ЛЕВУЮ СТРЕЛОЧКУ
// const leftButton = document.querySelector('.leftButton');
// leftButton.addEventListener('click', function (e) {
//     const numActiveSlide = numOfActiveSlide();
//     slides[numActiveSlide].classList.remove('active');
//     if (numActiveSlide == 0) {
//         slides[countSlides - 1].classList.add('active');
//     } else {
//         slides[numActiveSlide - 1].classList.add('active');
//     }
// });
// // КОЛИК НА ПРАВУЮ СТРЕЛОЧКУ
// const rightButton = document.querySelector('.rightButton');
// rightButton.addEventListener('click', function (e) {
//     const numActiveSlide = numOfActiveSlide();
//     slides[numActiveSlide].classList.remove('active');
//     if (numActiveSlide == countSlides - 1) {
//         slides[0].classList.add('active');
//     } else {
//         slides[numActiveSlide + 1].classList.add('active');
//     }
// });

