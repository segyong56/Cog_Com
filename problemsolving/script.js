(() => {
var swiper = new Swiper('.blog-slider', {
   spaceBetween: 30,
   effect: 'fade',
   loop: true,
   mousewheel: {
     invert: false,
   },
   // autoHeight: true,
   pagination: {
     el: '.blog-slider__pagination',
     clickable: true,
   }
 });
})();

document.getElementById("btn1").onclick = function () {
    location.href = "problem-solving3/index.html";
 };
 
 document.getElementById("btn2").onclick = function () {
    location.href = "problem-solving1/index.html";
 };
 
 document.getElementById("btn3").onclick = function () {
    location.href = "problem-solving2/index.html";
 };
 