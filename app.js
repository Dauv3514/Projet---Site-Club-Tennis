var i = 0;
var images = ['images/Sans titre2.png', 'images/Sans titre.png'];
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



const img = document.getElementById('carousel');
const rightBtn = document.getElementById('right-btn');
const leftBtn = document.getElementById('left-btn');

// Images are from unsplash
let pictures = ['jourdec1.jpg','jourdec2.jpg','jourdec3.jpg','jourdec4.jpg'];

img.src = pictures[0];
let position = 0;

const moveRight = () => {
    if (position >= pictures.length - 1) {
        position = 0
        img.src = pictures[position];
        return;
    }
    img.src = pictures[position + 1];
    position++;
}

const moveLeft = () => {
    if (position < 1) {
        position = pictures.length - 1;
        img.src = pictures[position];
        return;
    }
    img.src = pictures[position - 1];
    position--;
}

rightBtn.addEventListener("click", moveRight);
leftBtn.addEventListener("click", moveLeft);





