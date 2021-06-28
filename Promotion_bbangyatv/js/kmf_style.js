/*//jQuery to collapse the navbar on scroll
var header_height  = $('.navbar').height(),
    intro_height    = $('.intro-section').height(),
    offset_val = intro_height + header_height;
$(window).scroll(function() {
  var scroll_top = $(window).scrollTop();
    if (scroll_top >= offset_val) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
            $(".navbar-fixed-top").removeClass("navbar-transparent");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
      $(".navbar-fixed-top").addClass("navbar-transparent");
    }
});
*/
//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});


// //jQuery to collapse the navbar on scroll
// $(window).scroll(function() {
//     if ($(".navbar").offset().top > 100) {
//         $(".navbar-fixed-top").addClass("top-nav-collapse");
//             $(".navbar-fixed-top").removeClass("navbar-transparent");
//     } else {
//         $(".navbar-fixed-top").removeClass("top-nav-collapse");
//       $(".navbar-fixed-top").addClass("navbar-transparent");
//     }
// });

// Tabs	
$("document").ready(function(){
	  $(".tab-container .tab-content").hide();
	  $(".tab-container .tab-content:first").show();
	});

	$(".tab-slider-nav li").click(function() {
	  $(".tab-container .tab-content").hide();
	  var activeTab = $(this).attr("rel");
	  $("#"+activeTab).fadeIn();
		if($(this).attr("rel") == "tab2"){
			$('.tabs-nav').addClass('slide');
		}else{
			$('.tabs-nav').removeClass('slide');
		}
	  $(".tab-slider-nav li").removeClass("active");
	  $(this).addClass("active");
	});

	
// Layer Popup Close
function closeLayer(IdName){
	var pop = document.getElementById(IdName);
	pop.style.display = "none";
}

