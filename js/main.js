// Простое бургер-меню для мобильной навигации
document.addEventListener('DOMContentLoaded', function () {
  var burger = document.querySelector('.burger');
  var nav = document.getElementById('site-nav');

  if (!burger || !nav) return;

  burger.addEventListener('click', function () {
    var isOpen = nav.classList.toggle('is-open');
    burger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Закрывать меню при клике на ссылку (для мобильных)
  nav.addEventListener('click', function (event) {
    if (event.target.matches('.site-nav__link') && window.innerWidth < 768) {
      nav.classList.remove('is-open');
      burger.setAttribute('aria-expanded', 'false');
    }
  });
});
