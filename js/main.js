
//Меню

const menuTrigger = document.querySelector('.composition__trigger');
console.log(menuTrigger);
const dropDownMenu = document.querySelector('.drop-down-menu');

menuTrigger.addEventListener('click', function () {
    event.preventDefault();
    if (dropDownMenu.classList.contains('drop-down-menu_active')){
        dropDownMenu.classList.remove("drop-down-menu_active");
        menuTrigger.style.background='#f08c33';
    }else {
        dropDownMenu.classList.add("drop-down-menu_active");
        menuTrigger.style.background='#e35028';
    }
});


//Карусель от Сергея

const carouselList = document.querySelector('.carousel__list');
const carouselArrowRight = document.querySelector('.carousel__arrow-right');
const carouselArrowLeft = document.querySelector('.carousel__arrow-left');

const minRight = 0;
const maxRight = 1840;
const step = 920;
let currentRight = 0;

carouselList.style.right=currentRight;

carouselArrowRight.addEventListener('click', function () {
    if (currentRight < maxRight){
        currentRight += step;
        carouselList.style.right = currentRight + "px";
    }
});

carouselArrowLeft.addEventListener("click", function() {
    if (currentRight > minRight) {
        currentRight -= step;
        carouselList.style.right = currentRight + "px";
    }
});

//Аккордеон от Маргариты

var accordion = document.getElementsByClassName("team__accordion"),
    items = document.getElementsByClassName("team__item"),
    contents = document.getElementsByClassName("team__item-content"),
    i;

document.addEventListener("click", function(e) {
    if (e.target.classList.contains("team__item-header")) {
        event.preventDefault();
        var trigger = e.target;
        var content = trigger.nextElementSibling;
        var item = trigger.parentNode;

        if (!item.classList.contains("team__item_active")) { // не активный
            // удаляем active для всех li
            for (i = 0; i < items.length; i++) {
                items[i].classList.remove("team__item_active");
            }
            // добавляем active для текущего li
            item.classList.add("team__item_active");

            // закрываем все блоки с контентом
            for (i = 0; i < contents.length; i++) {
                contents[i].style.height = null;
            }
            // открываем текущий блок с контентом
            content.style.height = content.scrollHeight + "px";

        } else { // активный
            // удаляем класс active для текущего li
            item.classList.remove("team__item_active");

            // закрываем текущий блок с контентом
            content.style.height = null;
        }
    }
});

//Аккордеон от Маргариты

var accordionMenu = document.getElementsByClassName("menu__accordion"),
    itemsMenus = document.getElementsByClassName("menu__item"),
    contentsMenus = document.getElementsByClassName("menu__item-description"),
    i;

document.addEventListener("click", function(e) {
    if (e.target.classList.contains("menu__item-header")) {
        event.preventDefault();
        var trigger = e.target;
        var contentsMenu = trigger.nextElementSibling;
        var itemsMenu = trigger.parentNode;

        if (!itemsMenu.classList.contains("menu__item_active")) { // не активный
            // удаляем active для всех li
            for (i = 0; i < itemsMenus.length; i++) {
                itemsMenus[i].classList.remove("menu__item_active");
            }
            // добавляем active для текущего li
            itemsMenu.classList.add("menu__item_active");

            // закрываем все блоки с контентом
            for (i = 0; i < contentsMenus.length; i++) {
                contentsMenus[i].style.width = null;
            }
            // открываем текущий блок с контентом
            contentsMenu.style.width = contentsMenu.scrollWidth*4 + "px";

        } else { // активный
            // удаляем класс active для текущего li
            itemsMenu.classList.remove("menu__item_active");

            // закрываем текущий блок с контентом
            contentsMenu.style.width = null;
        }
    }
});

//Отзывы

var openBtn = document.querySelector('.reviews__btn');
var popup = document.querySelector('.reviews__popup');
var closeBtn = document.querySelector('.popup__close');

openBtn.addEventListener('click', function () {
    event.preventDefault();
    popup.style.opacity = '1';
});

closeBtn.addEventListener('click', function () {
    event.preventDefault();
    popup.style.opacity = '0';
});


