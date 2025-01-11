$(document).ready(function(){
  $('.carousel').slick({
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 6,
    autoplay: true,
    autoplaySpeed: 2000,
    dots:true,
    centerMode: true,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 6,
        // centerMode: true,

      }

    }, {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 6,
        dots: true,
        infinite: true,

      }
    },  {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
      }
    }]
  });
});

// login sign form start

$(document).ready(function(){
  $("#signForm,#loginForm,#summary,#congratutaltion").hide();
  $("#signBtn,#showSignup").click(function(){
    $("#loginForm").hide();
    $("#signForm").show();
  });
  $("#loginBtn,#showLogin").click(function(){
    $("#loginForm").show();
    $("#signForm").hide();
  });
  $("#signUpBtn").click(function(){
    $("#summary").show();
    $("#signForm").hide();
  });
  $("#booking").click(function(){
    $("#congratutaltion").show();
    $("#summary").hide();
  });
  // search click
  $("#search,#mobiSearch").click(function(){
    $(".searchmodel").show();
  });
  $("#closeBtn").click(function(){
    $(".searchmodel").hide();
  });
  // search click end
  // mobile menu show hide
  $("#bugerMenu").click(function(){
    $(".verticalMenu").show();
  });
  $("#closeMenuBtn").click(function(){
    $(".verticalMenu").hide();
  });
  
  // mobile menu show hide
  
  // add remove class from menu
 

  $('body').scroll(function(){
    if ($(this).scrollTop() > 50) {
      $('.menuBg').addClass('addBg');
      $('.addBg').removeClass('menuBg');
    } else {
      $('.addBg').addClass('menuBg');
      $('.menuBg').removeClass('addBg');
    }
  });
  //add remove class from menu

  // filter popup
  $(".filterBtn").click(function(){
    $(".filterModel").show();
  });
  $(".closefilter").click(function(){
    $(".filterModel").hide();
  });
  // filter popup end
// add link to card
  $('#myCard').click(function () {
    window.location = 'category.html';
  });
  
  $('#courceInfo').click(function () {
    window.location = 'course-info-computer .html';
  });

  $('#courceFree').click(function () {
    window.location = 'course-free-computer.html';
  });
  // add link to card

  // filter popup
  $('.filterModel').click(function(e){
    if(e.target == this){
        $(this).hide()
    }
});
// filter popup

var flag = 0;  
$("#dummyimage").click(function(){
  $("#towVisw").toggleClass("listview");
  if(flag == 0) {
    $("#dummyimage").attr("src","images/view_list.svg");
    flag = 1;
  }
  else if(flag == 1) {
    $("#dummyimage").attr("src","images/grid.svg");
    flag = 0;
  }
});

});

// login sign form end


