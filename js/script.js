jQuery(document).ready(function(){
  jQuery('.multiple-items').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  autoplaySpeed: 2000,
  arrows: false
  });
  $('.gallery-container').magnificPopup({
  delegate: 'a',
  type: 'image'
  });

});

function initMap() {
  var myLatLng = {lat: 15.522390, lng: 73.820610};
  var map=new google.maps.Map(document.getElementById("map"),{
    zoom:4,
    center: myLatLng});
    var marker = new google.maps.Marker({position: myLatLng, map: map});
}
$(document).ready(function(){
      $(window).scroll(function() {
        if ($(document).scrollTop() < 50) {

          $(".navbar-default").removeClass("bg-class");
          $(".navbar-default").addClass("trans-class");

        
        } else {
          $(".navbar-default").removeClass("trans-class");
          $(".navbar-default").addClass("bg-class");

        }

    });

});
$(document).ready(function(){
    $(".navbar-toggler").click(function() {

      if ($(document).scrollTop() < 50)  {
        $(".navbar-default").removeClass("trans-class");
        //$(".navbar-default").removeClass("bg-class");
        $(".navbar-default").toggleClass("bg-class");
    }
  });
});
