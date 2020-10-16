//jquery-click-scroll
//by syamsul'isul' Arifin

var sectionArray = [
  "header",
  "about",
  "services",
  "photo",
  "video",
  "contacts",
];

$.each(sectionArray, function (index, value) {
  $(document).scroll(function () {
    var offsetSection = $("#" + value).offset().top;

    var docScroll = $(document).scrollTop();

    var docScroll1 = docScroll + 200;

    if (docScroll1 >= offsetSection) {
      $(".nav__item").removeClass("active");
      $(".nav__item").eq(index).addClass("active");
    }
  });
});

$(document).ready(function () {
  $(".nav__item").eq(0).addClass("active");
  $(".nav__item a").click(function (e) {
    e.preventDefault();
    var link = $(this).attr("href");
    var offsetClick = $(link).offset().top;
    $("html, body").stop().animate(
      {
        scrollTop: offsetClick,
      },
      700
    );
  });
});
