$(document).ready(function(){

$('.burger-button').click(function(){
  $('.info-top__main-menu').slideToggle('visible');
});

var toggles = document.querySelectorAll(".burger-button");

  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };

  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
      (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
    });
  }


$(".more , .services__more").on('click', function() {
    $(".main__form").fadeIn();
    $('body').css('overflow','hidden');
});
$(document).mouseup(function (e){
  var modalctr = $(".main__form");
  var modal = $(".form__name, .form__number, .form__mail, .form__button, .form__container");
  if (!modal.is(e.target) && modal.has(e.target).length === 0){
  modalctr.fadeOut();
  $('body').css('overflow','auto');
  }
  });


$(".calling , .about__footer-calling, .mobile__calling").on('click', function() {
    $(".calling__form").fadeIn();
    $('body').css('overflow','hidden');
});
$(document).mouseup(function (e){
  var modalctr = $(".calling__form");
  var modal = $(".form__name, .form__number, .form__button, .mobile__calling, .form__container");
  if (!modal.is(e.target) && modal.has(e.target).length === 0){
  modalctr.fadeOut();
  $('body').css('overflow','auto');
  }
  });
  
  $(".info-top__menu-link, .about__list-link").on("click", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1000);
});

$(".form__number").mask("+7(000)-000-00-00", {
  placeholder: "+7(___)-___-__-__",
  clearIfNotMatch: true
});

$('form').each(function () {
  $(this).validate({
    errorPlacement(error, element) {
      return true;
    },
    focusInvalid: false,
    rules: {
      Phone: {
        required: true,
      },
      Name: {
        required: true,
      },
      email: {
        required: false,
      }
    },
    messages: {
      Phone: {
        required: 'Нужно что-то ввести'
      },
      Name: {
        required: 'Нужно что-то ввести',
      }
    },
    submitHandler(form) {
    let th = $(form);

    $.ajax({
    type: 'POST',
    url: '../php/mail.php',
    data: th.serialize(),
    // eslint-disable-next-line func-names
  }).done(() => {

    console.log('Sended')
    th.trigger('reset');
  });

  return false;
  }
});
});

});

/* "use strict"

document.addEventListener('DOMContentLoaded', function(){
  const eMail = document.getElementById('eMail');
  const form1=document.getElementById('main__form');
  const form2=document.getElementById('calling__form');
  form1.addEventListener('submit', formSend);
  form2.addEventListener('submit', formSend);
  
  async function formSend(e){
    e.preventDefault();

    let error = formValidate(form1);
  }

  function formValidate(form1) {
    let error = 0;
    let formReq = document.querySelectorAll('._req');
  }

  function emailTest(eMail){
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(eMail.value);
  }
}) */


