const hamburgerDiv = document.querySelector('.action__open');
const closeDiv = document.querySelector('.action__close');
const hamburger = document.getElementById('hamburger');
const closebuger = document.getElementById('close');
const navBar = document.getElementById('navbar');

console.log('ham',hamburger);
console.log('hamdiv', hamburgerDiv);
hamburger.addEventListener('click', () => {
    console.log('clicked')
    navBar.classList.toggle('show');
    hamburgerDiv.classList.toggle('hide');
    closeDiv.classList.toggle('show');
});

closebuger.addEventListener('click', () => {
    console.log('clicked')
    navBar.classList.toggle('show');
    hamburgerDiv.classList.toggle('hide');
    closeDiv.classList.toggle('show');
});