const carouselList = document.querySelector('.carousel__list');
console.log(carouselList);

const carouselArrowLeft = document.querySelector('.carousel__arrow-right');
console.log(carouselArrowLeft);

const minRight = 0;
const maxRight = 1300;
const step = 800;
let currentRight = 0;

carouselList.style.right=currentRight;
console.log(currentRight);