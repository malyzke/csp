import '../scss/style.scss';

const toggleMenu = document.querySelector('.burger-toggle'),
      menu = document.querySelector('.menu'),
      contentMore = document.querySelectorAll('.text-more'),
      closeMenu = document.querySelector('.burger-close'),
      contentBtn = document.querySelectorAll('.content-text__more'),//btn
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
      opacityMenu =  document.querySelector('.menu'),
      opcityContent =  document.querySelector('.section-content'),
      opacityBrands =  document.querySelector('.brands'),
      opacityServise =  document.querySelector('.section-servise'),
      opacityPrice =  document.querySelector('.price'),
      opacityFooter = document.querySelector('.footer'),
      opacityHeader =document.querySelector('.header'),
      bodyScroll  = document.querySelector('body'),




      modalCallBtn = document.querySelectorAll('.search'),
      modalCall = document.querySelector('.modalcall'),
      closeModalCall = document.querySelector('.modalcall-close'),



      //tabs
      tabNavItem = document.querySelectorAll('.nav-link__item'),
      tabContentItem = document.querySelectorAll('.content-text');


      tabNavItem.forEach((elem) => {
        elem.addEventListener('click', activeTab)
      })

      function activeTab() {
      tabNavItem.forEach((elem) => {
        elem.classList.remove('nav-link__active')
      })
      console.log(this)
      this.classList.add('nav-link__active')
      let tabName = this.getAttribute('data-tab')
        activeTabContent(tabName);
      }

      function activeTabContent(tabName) {
        tabContentItem.forEach( (item) => {
          if(item.classList.contains(tabName)) {
            item.classList.add('active')
            item.classList.remove('hide-tab')
          } else {
            item.classList.remove('active')
            item.classList.add('hide-tab')
          }
        })
      }











      let closeModal = () => {
          modalCall.classList.remove('modalcall-show')
          menu.classList.remove('show')
          opacityMenu.classList.remove('opacity')
          opcityContent.classList.remove('opacity')
          opacityBrands.classList.remove('opacity')
          opacityServise.classList.remove('opacity')
          opacityPrice.classList.remove('opacity')
          opacityFooter.classList.remove('opacity')
          opacityHeader.classList.remove('opacity')
          bodyScroll.classList.remove('noscroll')
       }




         modalCallBtn.forEach( (item) => {
          item.addEventListener('click' , ()=>{

            modalCall.classList.toggle('modalcall-show')
            opacityMenu.classList.toggle('opacity')
            opcityContent.classList.toggle('opacity')
            opacityBrands.classList.toggle('opacity')
            opacityServise.classList.toggle('opacity')
            opacityPrice.classList.toggle('opacity')
            opacityFooter.classList.toggle('opacity')
            opacityHeader.classList.toggle('opacity')
            bodyScroll.classList.toggle('noscroll')
            let stop = false
            let stopClose = ()=> {
              stop = true
            }
            let windowClick = () => {
              if(stop) {
                stop = false
                return
              }
              closeModal()
              modalCall.removeEventListener('click', stopClose)
              window.removeEventListener('click',windowClick)

            }
            setTimeout(() => {
              modalCall.addEventListener('click', stopClose)
            window.addEventListener('click',windowClick)
            }, 0);

          })


        closeModalCall.addEventListener('click',closeModal)

              // modalCall.classList.remove('modalcall-show')
              // menu.classList.remove('show')
              // opacityMenu.classList.remove('opacity')
              // opcityContent.classList.remove('opacity')
              // opacityBrands.classList.remove('opacity')
              // opacityServise.classList.remove('opacity')
              // opacityPrice.classList.remove('opacity')
              // opacityFooter.classList.remove('opacity')
              // opacityHeader.classList.remove('opacity')
              // bodyScroll.classList.remove('noscroll')


       })
      

       let closeModalFeedbackCB=  () => {
              modalFeedback.classList.remove('modalfeedback-show')
              menu.classList.remove('show')
              menu.classList.remove('show')
              opacityMenu.classList.remove('opacity')
              opcityContent.classList.remove('opacity')
              opacityBrands.classList.remove('opacity')
              opacityServise.classList.remove('opacity')
              opacityPrice.classList.remove('opacity')
              opacityFooter.classList.remove('opacity')
              opacityHeader.classList.remove('opacity')
              bodyScroll.classList.remove('noscroll')
            }

       feedbackBtn.forEach( (item) => {
          item.addEventListener('click' , ()=>{
            modalFeedback.classList.toggle('modalfeedback-show')
              opacityMenu.classList.toggle('opacity')
              opcityContent.classList.toggle('opacity')
              opacityBrands.classList.toggle('opacity')
              opacityServise.classList.toggle('opacity')
              opacityPrice.classList.toggle('opacity')
              opacityFooter.classList.toggle('opacity')
              opacityHeader.classList.toggle('opacity')
              bodyScroll.classList.toggle('noscroll')
              let stop = false
            let stopClose = ()=> {
              stop = true
            }
            let windowClick = () => {
              if(stop) {
                stop = false
                return
              }
              closeModalFeedbackCB()
              modalFeedback.removeEventListener('click', stopClose)
              window.removeEventListener('click',windowClick)

            }
            setTimeout(() => {
              modalFeedback.addEventListener('click', stopClose)
            window.addEventListener('click',windowClick)
            }, 0);

          }),
        closeModalFeedback.addEventListener('click', closeModalFeedbackCB)
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
        bodyScroll.classList.toggle('noscroll')

      });

        closeMenu.addEventListener('click', () => {
          menu.classList.remove('show')
          bodyScroll.classList.remove('noscroll')

      });

        contentBtn.forEach((item) => {
          item.addEventListener('click', () => {
          transformImg.classList.toggle('transform')
           if (item.textContent === 'Скрыть') {
            item.textContent = 'Показать всё'
            item.prepend(transformImg)
            } else {
             item.textContent = 'Скрыть'
              item.prepend(transformImg)
            }
            contentMore.forEach((val) => {
              val.classList.toggle('show-text')
            })
          })
        })






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

