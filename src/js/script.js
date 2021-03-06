// Проверка поддержки webp, добавление класс webp или no-webp для HTML
(function isWebp() {
  // Проверка поддержки webp
  function testWebP(callback) {
    let webP = new Image();
    webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
    };
    webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
  }
  // Добавление класса _webp или _no-webp для HTML
  testWebP(function (support) {
    let className = support === true ? 'webp' : 'no-webp';
    document.documentElement.classList.add(className);
  })
}())


// Jquery ----------------
@@include('../../node_modules/jquery/dist/jquery.min.js');


// Plugins ----------------
@@include('./plugins/simple-select.js');
@@include('./plugins/jquery.spincrement.min.js');

@@include('../../node_modules/swiper/swiper-bundle.min.js');
@@include('../../node_modules/magnific-popup/dist/jquery.magnific-popup.min.js');
@@include('../../node_modules/wowjs/dist/wow.min.js');
@@include('../../node_modules/translater.js/dist/translater.min.js');



// Main-JS -----------------
@@include('./main.js');


