var i = 0;
var images = ['images/Sans titre2.png', 'images/Sans titre.png', 'images/Sans titre3.png'];
var time = 5000;

function changeImg() {

    document.slide.src = images[i];

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout("changeImg()", time);
}

window.onload = changeImg;






const navigation = document.querySelector('nav');

window.addEventListener('scroll', () => {

    if (window.scrollY > 880) {
        navigation.classList.add('anime-nav');
    } else {
        navigation.classList.remove('anime-nav');
    }
})






const imgs = document.getElementById('java');
const nbSlide = imgs.length;
const suivant = document.querySelector('.right');
const precedent = document.querySelector('.left');
let count = 0;

function slideSuivante() {

    imgs[count].classList.remove('active');

    if (count < nbSlide - 1) {
        count++;
    } else {
        count = 0;
    }

    imgs[count].classList.add('active')
    console.log(count);
}

suivant.addEventListener('click', slideSuivante)







