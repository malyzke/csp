!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){e.exports=r(1)},function(e,t,r){"use strict";r.r(t);r(2);function n(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(e,t)}(e))){var t=0,r=function(){};return{s:r,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,c,l=!0,i=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return l=e.done,e},e:function(e){i=!0,c=e},f:function(){try{l||null==n.return||n.return()}finally{if(i)throw c}}}}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var c=document.querySelector(".burger-toggle"),l=document.querySelector(".menu"),i=document.querySelector(".text-more"),a=document.querySelector(".burger-close"),u=document.querySelector(".content-text__more"),s=document.querySelector(".brands-more"),f=document.querySelectorAll(".five"),d=document.querySelector(".brands-icon"),m=document.querySelector(".text-img"),y=document.querySelector(".cart-more"),g=document.querySelectorAll(".three-cart"),v=document.querySelector(".cart-icon"),b=document.querySelectorAll(".repair"),p=document.querySelector(".modalfeedback"),S=document.querySelector(".modalfeedback-close"),h=document.querySelectorAll(".search"),w=document.querySelector(".modalcall"),L=document.querySelector(".modalcall-close");console.log(h),h.forEach((function(e){e.addEventListener("click",(function(){w.classList.toggle("modalcall-show")})),L.addEventListener("click",(function(){w.classList.remove("modalcall-show"),l.classList.remove("show")}))})),b.forEach((function(e){e.addEventListener("click",(function(){p.classList.toggle("modalfeedback-show")})),S.addEventListener("click",(function(){p.classList.remove("modalfeedback-show"),l.classList.remove("show")}))})),s.addEventListener("click",(function(){d.classList.toggle("transform");var e,t=n(f);try{for(t.s();!(e=t.n()).done;){e.value.classList.toggle("show-cart")}}catch(e){t.e(e)}finally{t.f()}})),y.addEventListener("click",(function(){v.classList.toggle("transform-icon");var e,t=n(g);try{for(t.s();!(e=t.n()).done;){e.value.classList.toggle("show-three")}}catch(e){t.e(e)}finally{t.f()}})),c.addEventListener("click",(function(){l.classList.toggle("show")})),a.addEventListener("click",(function(){l.classList.remove("show")})),u.addEventListener("click",(function(){i.classList.toggle("show-text"),m.classList.toggle("transform")}));new Swiper(".swiper-container",{direction:"horizontal",loop:!0,pagination:{el:".swiper-pagination",clickable:!0},scrollbar:{el:".swiper-scrollbar"},breakpoints:{320:{slidesPerView:1.3,spaceBetween:10}}})},function(e,t,r){}]);
//# sourceMappingURL=bundle.js.map