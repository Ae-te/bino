function slowScroll(id) {//в параметр передаем id элемента, к которому хотим проскроллить
  $("html, body").animate({//анимация для html, body - тегов
    scrollTop: $(id).offset().top - 50 //всю нашу страничку скроллим к этому объекту. Для этого берем отступ
    // этого объекта от начала странички.
  }, 500);
  return false;//чтобы не обновлялась страничка
}

$(".header__top .menu__img").on("click", function () {

  if ($(".header .mobile-menu").is(":visible"))//виден ли сейчас mobile-menu
    $(this).html('<i class="fas fa-bars"></i>');
  else
    $(this).html('<i class="fas fa-times"></i>');

  $(".header .mobile-menu").slideToggle();//Плавно раскрывается и закрывается
});

$(document).ready(function () {
  $('.slider').slick({
    prevArrow: $('.arrow__prev'),
    nextArrow: $('.arrow__next')
  });
});

// $(".form__btn").on("click", function () {
//   let email = $("#email").val();//получаем email пользователя
//   email = email.trim()// без лишних пробелов
//
//   if (email.split("@").length != 2 || email.split(".").length < 2) {//email разбили по символу @ (массив должен
//     // состоять из 2 элементов)
//     $(".form label").text("Вы ввели неверный email");
//     $(".form label").fadeIn();
//   }

//   setTimeout(function () {
//     $(".form label").fadeOut();
//   }, 1500);
// });

//делает кнопку arrow-up то видимой, то невидимой
$(window).scroll(function () {

  if ($(this).scrollTop() > 0) {
    $('.arrow-up').fadeIn();
  } else {
    $('.arrow-up').fadeOut();
  }
});

//плавно скроллит до начала страницы
$(function () {
  $('.arrow-up').click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 1000);
  });
});
