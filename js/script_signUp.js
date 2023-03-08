'use strict';
const regForm = document.querySelector('.boxLogin');
const dropWindow = document.querySelector('.centerDropWindow');
regForm.addEventListener('submit', function (e) {
    dropWindow.hidden = false;
    e.preventDefault();
})

const exitButton = document.querySelector('.exitButton');
exitButton.addEventListener('click', function (e) {
    dropWindow.hidden = true;
});