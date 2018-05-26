//Навигация на адаптиве

var NavBtn = document.querySelector('.header__menu-trigger');
var popupNav = document.querySelector('.header__menu_adaptive');
var NavcloseBtn = document.querySelector('.hero__close-popup');

    NavBtn.addEventListener('click', function (event) {
        event.preventDefault();
        popupNav.style.display = 'block';
    });

    NavcloseBtn.addEventListener('click', function (event) {
        event.preventDefault();
        popupNav.style.display = 'none';
    });


document.addEventListener('click', e => {
    console.log(e.target);
});

//Меню
const menuTrigger = document.querySelectorAll('.composition__trigger');
console.log(menuTrigger);
const dropDownMenu = document.querySelectorAll('.drop-down__menu');
for (let i = 0; i < menuTrigger.length; i++) {
    menuTrigger[i].addEventListener('click', function (event) {
        console.log(menuTrigger[i]);
        event.preventDefault();
        if (dropDownMenu[i].classList.contains('drop-down__menu_active')) {
            dropDownMenu[i].classList.remove("drop-down__menu_active");
            menuTrigger[i].style.background = '#f08c33';
        } else {
            dropDownMenu[i].classList.add("drop-down__menu_active");
            menuTrigger[i].style.background = '#e35028';
        }
    });
}

//Карусель от Сергея

const carouselList = document.querySelector('.carousel__list');
const carouselArrowRight = document.querySelector('.carousel__arrow-right');
const carouselArrowLeft = document.querySelector('.carousel__arrow-left');

const minRight = 0;
const maxRight = 1840;
const step = 920;
let currentRight = 0;

carouselList.style.right = currentRight;

carouselArrowRight.addEventListener('click', function () {
    if (currentRight < maxRight) {
        currentRight += step;
        carouselList.style.right = currentRight + "px";
    }
});

carouselArrowLeft.addEventListener("click", function () {
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

document.addEventListener("click", function (e) {
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
                contents[i].style.minHeight = null;
            }
            // открываем текущий блок с контентом
            content.style.minHeight = content.scrollHeight + "px";

        } else { // активный
            // удаляем класс active для текущего li
            item.classList.remove("team__item_active");

            // закрываем текущий блок с контентом
            content.style.minHeight = null;
        }
    }
});

//Горизонтальный аккордеон от Маргариты

var accordionMenu = document.getElementsByClassName("menu__accordion"),
    itemsMenus = document.getElementsByClassName("menu__item"),
    contentsMenus = document.getElementsByClassName("menu__item-description"),
    i;

document.addEventListener("click", function (e) {
    event.preventDefault();
    var contentWidth = '400px';
    if (e.target.classList.contains("menu__item-header") || e.target.classList.contains("menu__item-header-text")) {

        var trigger;

        if (e.target.classList.contains("menu__item-header")) { // если клик по триггеру
            trigger = e.target;
        } else { // значит клик был по тексту и триггер это родительский узел блока с текстом
            trigger = e.target.parentNode;
        }

        var content = trigger.nextElementSibling;
        var item = trigger.parentNode;

        console.log("window.innerWidth");
        console.log(window.innerWidth);

        // если ширина экрана меньше чем 600 пикселей
        if (!item.classList.contains("menu__item_active")) { // не активный
            // удаляем active для всех li
            for (i = 0; i < itemsMenus.length; i++) {
                itemsMenus[i].classList.remove("menu__item_active");
            }
            // добавляем active для текущего li
            item.classList.add("menu__item_active");

            // закрываем все блоки с контентом
            for (i = 0; i < contentsMenus.length; i++) {
                contentsMenus[i].style.width = null;
            }
            // открываем текущий блок с контентом
            content.style.width = contentWidth;

        } else { // активный
            // удаляем класс active для текущего li
            item.classList.remove("menu__item_active");

            // закрываем текущий блок с контентом
            content.style.width = null;
        }

    }
});

//Отзывы

var openBtn = document.querySelectorAll('.reviews__btn');
var popup = document.querySelector('.reviews__popup');
var closeBtn = document.querySelector('.popup__close');
for (let i = 0; i < openBtn.length; i++) {
    openBtn[i].addEventListener('click', function (event) {
        event.preventDefault();
        popup.style.display = 'block';
    });

    closeBtn.addEventListener('click', function (event) {
        event.preventDefault();
        popup.style.display = 'none';
    });
}

document.addEventListener('click', e => {
    console.log(e.target);
});

/*
//Scroll
const sections = $(".section");
const displays = $(".maincontent");
let inScroll = false;

const performTransition = sectionEq => { // функция делает плавную анимацию до секции
    const position = `${sectionEq * -100}%`; // задает на сколько процентов нужно подвинуть секцию

    if (inScroll) return;

    inScroll = true;

    sections //добавили активный класс секции которая видна, а у всех соседей убрали
        .eq(sectionEq)
        .addClass('section_active')
        .siblings()
        .removeClass('section_active');

    displays.css({
        transform: `translateY(${position})`,
        "-webkit-transform": `translateY(${position})`
    });
};

const scrollToSection = direction =>{ //функция, которая расчитывает перемещение
  const activeSection = sections.filter('.section_active');
  const nextSection = activeSection.next();
  const prevSection = activeSection.prev();

  switch (direction){
        case "up":
            performTransition(prevSection.index());
            break;
        case"down":
            performTransition(nextSection.index());
            break;
  }
};

$(document).on('wheel', e => { //wheel – событие, которое отслеживает колесико мыши
    const deltaY = e.originalEvent.deltaY; // показивает перемещение по Y
    if (deltaY > 0) {
        console.log('down');
        scrollToSection("down");
    }
    if (deltaY < 0) {
        console.log('up');
        scrollToSection("up");
    }
});
*/
// Карта от Оли
ymaps.ready(init);

var placemarks = [
        {
            latitude: 59.94554327989287,
            longitude: 30.38935262114668,
            hintContent: '<div class="map__hint">ул. Литераторов, д. 19</div>',
            balloonContent: [
                '<div class="map__balloon">',
                '<img class="map__burger-img" src="img/content/map/burger.png" alt="Бургер"/>',
                'Самые вкусные бургеры у нас! Заходите по адресу: ул. Литераторов, д. 19',
                '</div>'
            ]
        },
        {
            latitude: 59.91142323563909,
            longitude: 30.50024587065841,
            hintContent: '<div class="map__hint">Малый проспект В О, д 64</div>',
            balloonContent: [
                '<div class="map__balloon">',
                '<img class="map__burger-img" src="img/content/map/burger.png" alt="Бургер"/>',
                'Самые вкусные бургеры у нас! Заходите по адресу: Малый проспект В О, д 64',
                '</div>'
            ]
        },
        {
            latitude: 59.88693161784606,
            longitude: 30.319658102103713,
            hintContent: '<div class="map__hint">наб. реки Фонтанки, д. 56</div>',
            balloonContent: [
                '<div class="map__balloon">',
                '<img class="map__burger-img" src="img/content/map/burger.png" alt="Бургер"/>',
                'Самые вкусные бургеры у нас! Заходите по адресу: наб. реки Фонтанки, д. 56',
                '</div>'
            ]
        },
        {
            latitude: 59.97033574821672,
            longitude: 30.315194906302924,
            hintContent: '<div class="map__hint">Другая улица</div>',
            balloonContent: [
                '<div class="map__balloon">',
                '<img class="map__burger-img" src="img/content/map/burger.png" alt="Бургер"/>',
                'Самые вкусные бургеры у нас! Заходите по адресу: наб. реки Фонтанки, д. 56',
                '</div>'
            ]
        }
    ],
    geoObjects= [];

function init() {
    var map = new ymaps.Map('map', {
        center: [59.94, 30.32],
        zoom: 12,
        controls: ['zoomControl'],
        behaviors: ['drag']
    });

    for (var i = 0; i < placemarks.length; i++) {
        geoObjects[i] = new ymaps.Placemark([placemarks[i].latitude, placemarks[i].longitude],
            {
                hintContent: placemarks[i].hintContent,
                balloonContent: placemarks[i].balloonContent.join('')
            },
            {
                iconLayout: 'default#image',
                iconImageHref: 'img/content/map/sprite.png',
                iconImageSize: [46, 57],
                iconImageOffset: [-23, -57],
                iconImageClipRect: [[415, 0], [461, 57]]
            });
    }

    var clusterer = new ymaps.Clusterer({
        clusterIcons: [
            {
                href: 'img/content/map/burger.png',
                size: [100, 100],
                offset: [-50, -50]
            }
        ],
        clusterIconContentLayout: null
    });

    map.geoObjects.add(clusterer);
    clusterer.add(geoObjects);
}

//Ajax от Димы

$('.order__form-tag').on('submit', submitForm);

function submitForm (ev) {
    ev.preventDefault();

    var form = $(ev.target),
        data = form.serialize(),
        url = form.attr('action'),
        type = form.attr('method');

    ajaxForm(form).done(function(msg) {
        var mes = msg.mes,
            status = msg.status;

        if (status === 'OK') {
            form.append('<p class="success">' + mes + '</p>');
        } else{
            form.append('<p class="error">' + mes + '</p>');
        }
    }).fail(function(jqXHR, textStatus) {
        alert("Request failed: " + textStatus);
    });

};

// Универсальная функция для работы с формами
var ajaxForm = function (form) {
    var data = form.serialize(),
        url = form.attr('action');

    return $.ajax({
        type: 'POST',
        url: url,
        dataType : 'JSON',
        data: data
    })
};