import '../scss/style.scss';

const toggleMenu = document.querySelector('.burger-toggle'),
      menu = document.querySelector('.menu'),
      contentMore = document.querySelector('.text-more'),
      closeMenu = document.querySelector('.burger-close'),
      contentBtn = document.querySelector('.content-text__more'),//btn
      learnMore = document.querySelector('.brands-more'), // btn
      cartFive = document.querySelectorAll('.five'),
      brandsBtn = document.querySelector('.brands-icon'),
      transformImg = document.querySelector('.text-img'),
      cartBtn = document.querySelector('.cart-more'), //btn
      threeCart = document.querySelectorAll('.three-cart'),
      cartIcon = document.querySelector('.cart-icon'),
      expendImg = document.querySelector('.text-img'),
      feedbackBtn = document.querySelectorAll('.repair'),
      modalFeedback = document.querySelector('.modalfeedback'),
      closeModalFeedback =  document.querySelector('.modalfeedback-close'),

      modalCallBtn = document.querySelectorAll('.search'),
      modalCall = document.querySelector('.modalcall'),
      closeModalCall = document.querySelector('.modalcall-close');

  console.log(modalCallBtn)
         modalCallBtn.forEach( (item) => {
          item.addEventListener('click' , ()=>{
            modalCall.classList.toggle('modalcall-show')
          }),
        closeModalCall.addEventListener('click', () => {
              modalCall.classList.remove('modalcall-show')
              menu.classList.remove('show')
            })
       })


       feedbackBtn.forEach( (item) => {
          item.addEventListener('click' , ()=>{
            modalFeedback.classList.toggle('modalfeedback-show')
          }),
        closeModalFeedback.addEventListener('click', () => {
              modalFeedback.classList.remove('modalfeedback-show')
              menu.classList.remove('show')
            })
       })



      learnMore.addEventListener('click', () => {
         brandsBtn.classList.toggle('transform')
         for (let cart of cartFive) {
          cart.classList.toggle('show-cart')
        }
        if (learnMore.textContent === 'Скрыть') {
            learnMore.textContent = 'Показать всё'
            learnMore.prepend(brandsBtn)
            } else {
             learnMore.textContent = 'Скрыть'
             learnMore.prepend(brandsBtn)
            }
      })




      cartBtn.addEventListener('click', () => {
        // cartIcon.classList.toggle('transform-icon')
        for (let cart of threeCart) {
          cart.classList.toggle('show-three')
           cartIcon.classList.toggle('transform-icon')
        }
         if (cartBtn.textContent === 'Скрыть') {
            cartBtn.textContent = 'Показать всё'
            cartBtn.prepend(cartIcon)
            } else {
             cartBtn.textContent = 'Скрыть'
             cartBtn.prepend(cartIcon)
            }

      })

       toggleMenu.addEventListener('click', ()=> {
        menu.classList.toggle('show')
      });

        closeMenu.addEventListener('click', () => {
          menu.classList.remove('show')
      });

          contentBtn.addEventListener('click', ()=> {
          contentMore.classList.toggle('show-text')
          transformImg.classList.toggle('transform')
           if (contentBtn.textContent === 'Скрыть') {
            contentBtn.textContent = 'Показать всё'
            contentBtn.prepend(transformImg)
            } else {
             contentBtn.textContent = 'Скрыть'
                         contentBtn.prepend(transformImg)


            }

      });




//swiper

const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  breakpoints: {
     320: {
      slidesPerView: 1.3,
      spaceBetween: 10
    }
   }
});

