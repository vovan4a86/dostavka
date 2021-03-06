// ********** SWIPER ****************
// в html добавляем встроенные классы swiper
// swiper-container, swiper-wrapper, swiper-slide swiper-pagination, swiper-button-prev(next), swiper-scrollbar
let block01 = new Swiper('.block01__slider-wrap', {
   direction: 'horizontal',
   loop: true,
   spaceBetween: 30,

   breakpoints: {
    // when window width is >= 767px
    767: {
      direction: 'horizontal',
      loop: true,
      spaceBetween: 30,
      slidesPerView: 1
    }
  },
   pagination: {
     el: '.swiper-pagination',
     type: 'bullets',
   },
   navigation: {
     nextEl: '.block01__slider-next',
     prevEl: '.block01__slider-prev',
   },
 })
// ********** END SWIPER ****************
let block03 = new Swiper('.block03__container', {
  direction: 'horizontal',
  loop: false,
  spaceBetween: 30,
  slidesPerView: 2,
  initialSlide: 0,

  breakpoints: {
   // when window width is >= 767px
   767: {
     direction: 'horizontal',
     loop: false,
     spaceBetween: 30,
     slidesPerView: 6, 
     initialSlide: 0,
   }
 },

 navigation: {
    nextEl: '.block03__slider-next',
    prevEl: '.block03__slider-prev',
  }
})
// ********** END SWIPER ****************
let block05 = new Swiper('.block05__slider', {
  direction: 'horizontal',
  loop: true,
  spaceBetween: 0,
  slidesPerView: 1,

  breakpoints: {
   // when window width is >= 767px
   767: {
     direction: 'horizontal',
     loop: false,
     spaceBetween: 30,
     slidesPerView: 5
   }
 },

  navigation: {
    nextEl: '.block05__slider-next',
    prevEl: '.block05__slider-prev',
  }
})
// ********** END SWIPER ****************

// ********** ICON *******************
const icon = document.querySelector('.header__menu-icon');
const menu = document.querySelector('.header__menu');

icon.addEventListener('click', () => {
   icon.classList.toggle('active')
   menu.classList.toggle('show')
   document.querySelector('body').classList.toggle('fixed')
})

// переключение активных ссылок в шапке
const headerMenu = document.querySelector('.header__menu-list');
const headerMenuLink = document.querySelectorAll('.header__menu-link');
headerMenu.addEventListener('click', e => {
  linkTarget = e.target;
  headerMenuLink.forEach(link => {
    link.classList.remove('header__menu-link--active');
  })
  if (linkTarget.classList.contains('header__menu-link')) {
    linkTarget.classList.add('header__menu-link--active');
  }
})

// работа с кнопкой БЫСТРАЯ РЕГИСТРАЦИЯ
const regBtn = document.querySelector('.block01__form-btn');
const email = document.querySelector('.block01__form-email');
const answer = document.querySelector('.block01__form-info');

email.addEventListener('click', () => {
  answer.innerHTML = '';
})

regBtn.addEventListener('click', (e) => {
  e.preventDefault();
  emailValue = email.value;

  if (emailValue.match(/^.+@.+\..+$/igm)) {
    regBtn.value = 'Регистрация прошла успешно';
    regBtn.classList.add('send');
    regBtn.disabled = 'disabled';
    email.disabled = 'disabled';
  } else {
    answer.innerHTML = 'Введите правильный e-mail';
    answer.style.color = 'red';
  }
})
//--------------

const search = document.querySelector('.header__input-search')
const tempHolder = search.placeholder;
const mediaQuery = window.matchMedia('(max-width: 767px)')

function mediaChange(e) {
    if (e.matches) {
       // делаем на мобильном новый placeholder
       search.placeholder = 'Введите название или артикул'
    } else {
        // возвращаем placeholder
       search.placeholder = tempHolder;
    }
}
mediaQuery.addListener(mediaChange)
mediaChange(mediaQuery)

//переключение кнопок ТОВАРЫ КОМНАТЫ
let buttons = document.querySelectorAll('.block02__btn');
let tabs = document.querySelectorAll('.block02__items')
  buttons.forEach((elem, i) => {
    elem.addEventListener('click', () => {
      let activeBtn = document.querySelector('.block02__btn--active')
      let activeTab = document.querySelector('.block02__items--active')
      if (!elem.classList.contains('block02__btn--active')) {
        activeBtn.classList.remove('block02__btn--active')
        activeTab.classList.remove('block02__items--active')

        elem.classList.add('block02__btn--active')
        tabs[i].classList.add('block02__items--active')
      }
    })
  })

//кнопка Добавить в слайдере
//c глюком на мобильной версии (разобраться)

let addBtns = document.querySelectorAll('.block03__item-add-btn');

addBtns.forEach((elem,i) => {
    elem.addEventListener('click', () => {
      console.log(i)

      if (elem.classList.contains('btn-w')) {
        elem.classList.remove('btn-w')
        elem.classList.add('btn-b')
        elem.parentElement.querySelector('.block03__item-quantity').classList.add('show')

      } else if (elem.classList.contains('btn-b')) {
        elem.classList.remove('btn-b')
        elem.classList.add('btn-w')
        elem.parentElement.querySelector('.block03__item-quantity').classList.remove('show')
      }
    })
})

let decBtn = document.querySelectorAll('.block03__item-dec');
  decBtn.forEach((elem,i) => {
    elem.addEventListener('click', () => {
      let num = elem.parentElement.querySelector('.block03__item-num span')
      let value = +num.innerHTML;
      if (value > 1) {
        num.innerHTML = --value;
      }
      else {
        let itemQuant = document.querySelectorAll('.block03__item-quantity');
        itemQuant[i].classList.remove('show');
        itemQuant[i].nextElementSibling.classList.remove('btn-b');
        itemQuant[i].nextElementSibling.classList.add('btn-w');
      }
    })
  })

let incBtn = document.querySelectorAll('.block03__item-inc');
incBtn.forEach((elem,i) => {
  elem.addEventListener('click', () => {
    let num = elem.parentElement.querySelector('.block03__item-num span')
    let value = +num.innerHTML;
    if (value < 100) {
      num.innerHTML = ++value;
    }
  })
})
// CART MODAL --------------
const cart = new HystModal({
  linkAttributeName: "data-hystmodal",
});
const cartBtn = document.querySelector('.modal-cart-header__cart');
const calcBtn = document.querySelector('.modal-cart-header__calc');
const cartBackBtn = document.querySelector('.modal-cart__back')

function clickToCartBtn() {
  cartBtn.classList.add('tab-select');
  calcBtn.classList.remove('tab-select')
  document.querySelector('.modal-cart__main-calc').style.display = 'none'
  document.querySelector('.modal-cart__main-cart').style.display = 'block'
  document.querySelector('.hystmodal__window').classList.remove('cart-window-calc');
}

function clickToCalcBtn() {
  calcBtn.classList.add('tab-select');
  cartBtn.classList.remove('tab-select')
  document.querySelector('.modal-cart__main-calc').style.display = 'block'
  document.querySelector('.modal-cart__main-cart').style.display = 'none'
  document.querySelector('.hystmodal__window').classList.add('cart-window-calc');
}

cartBtn.addEventListener('click', () => {
  clickToCartBtn();
})
calcBtn.addEventListener('click', () => {
  clickToCalcBtn();
})
cartBackBtn.addEventListener('click', () => {
  clickToCartBtn();
})

// SUBSCRIBE MODAL -------------
const subscribeModal = new HystModal({
  linkAttributeName: "data-hystmodal",
});

// работа с ПОДПИСКОЙ НА НОВИНКИ в ФУТЕРЕ
const subsBtn = document.querySelector('.footer__form-btn')
const subsEmail = document.querySelector('.footer__form-email')

const modalBtn = document.querySelector('.modal-btn');
const modalEmail = document.querySelector('.modal-email');
const modalAnswer = document.querySelector('.modal-answer');
const checkBoxs = document.querySelectorAll('.checkbox-group-input');

subsBtn.addEventListener('click', () => {
  modalEmail.value = subsEmail.value;
})

modalEmail.addEventListener('click', () => {
  modalAnswer.innerHTML = '';
})

modalBtn.addEventListener('click', (e) => {
  e.preventDefault();
  emailValue = modalEmail.value;

  if (emailValue.match(/^.+@.+\..+$/igm)) {
    modalBtn.value = 'Вы подписаны';
    modalBtn.classList.add('modal-send');
    modalEmail.disabled = 'disabled';
    modalBtn.disabled = 'disabled';
    checkBoxs.forEach(check => {
      check.disabled = 'disabled';
    })
    setTimeout(() => {
      subscribeModal.close();
    }, 2000);
  } else {
    modalAnswer.innerHTML = 'Введите правильный e-mail';
    modalAnswer.style.color = 'red';
  }
})