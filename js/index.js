var i = 0, j = 0;
var beginTxt = '<h1>Hello World!</h1>';
var endTxt = '<h1>I am Luke Mueller</h1>';
var contactTxt = '<h1>Contact Me</h1>'
var speed = 100;
$(document).ready(function(){
    $(document).on("scroll", onScroll);
    if ($(window).width() < 1280) {
      $('nav').addClass("navbar-light");
      $('nav').removeClass("navbar-dark");
      $('nav').addClass("bg-light");
    }
    $('.nav-item').click(function(){
        $('.nav-item').removeClass('active');
        $(this).addClass('active');
        var currLink = $(this).children().first();
        var href = $(currLink).attr('href');
        if (href !== "#profile") {
            $('nav').removeClass("navbar-dark");
            $('nav').addClass("navbar-light");
            $('nav').addClass("bg-light");
            if (href === "#contact") {
                contactTypeWriter();
            }
        } else {
            $('nav').removeClass("navbar-light");
            $('nav').addClass("navbar-dark");
            $('nav').removeClass("bg-light");
        }
    });
});

function contactTypeWriter() {
    if (j < contactTxt.length) {
    document.getElementById("contactTypeWriter").innerHTML += contactTxt.charAt(j);
    j++;
    setTimeout(contactTypeWriter, 150);
  }
}
//go through all of the nav sections, compare to scroll location to find which section they are on
//if they are not on that section remove active class
function onScroll(){
  var scrollPos = $(document).scrollTop();
  $('.nav-item').each(function () {
  var currLink = $(this).children().first();
  var refElement = $(currLink.attr("aria-label"));
  // if the scroll position is greater than the top of the current element and less than the bottom of the element
  if (refElement.position().top - 60 <= scrollPos && $("#" + refElement["0"].id).position().top +$("#" + refElement["0"].id).height()-5 > scrollPos) {
      $('.nav-item').removeClass("active");
      currLink.addClass("active");
      if (refElement["0"].id !== "profile") {
        $('nav').removeClass("navbar-dark");
        $('nav').addClass("navbar-light");
        $('nav').addClass("bg-light");
      if (refElement["0"].id === "contact") {
        contactTypeWriter();
      } else {
        document.getElementById("contactTypeWriter").innerHTML = "";
        j = 0;
      }
    } else {
        if ($(window).width() >= 1280) {
          $('nav').removeClass("navbar-light");
          $('nav').addClass("navbar-dark");
          $('nav').removeClass("bg-light");
        }
      }
  }
  else{
      currLink.removeClass("active");
  }
  });
}

function typeWriter() {
  if (i < beginTxt.length) {
    document.getElementById("typeWriterText").innerHTML += beginTxt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else typeWriterSubtract();
}

function typeWriterSubtract() {
   var oldString = document.getElementById("typeWriterText").innerText;
   if (i > 0) {
        document.getElementById("typeWriterText").innerText = oldString.slice(0,-1);
        i--;
        setTimeout(typeWriterSubtract, speed);
   } else typeWriterEnding();
}

function typeWriterEnding() {
    if (i < endTxt.length) {
    document.getElementById("typeWriterText").innerHTML += endTxt.charAt(i);
    i++;
    setTimeout(typeWriterEnding, speed);
  }
}
