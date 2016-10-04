$(function(){
	$('a[href ^= "#"]').click(function(a) {
        a.preventDefault();
    })

    $(".main-gallery").owlCarousel({
    	items: 4,
    	margin: 20,
    	nav: false,
        loop: true,
        responsiveClass:true,
	    responsive:{
	        0:{
	            items:1,
	        },
	        480:{
	            items:2,
	        },
	        768:{
	            items:3,
	        },
	        1000:{
	            items:4,
	        }
	    }
    });

    $('.main-gallery-prev').on('click', function() {
    	$('.main-gallery').trigger('prev.owl.carousel');
    })
    $('.main-gallery-next').on('click', function() {
    	$('.main-gallery').trigger('next.owl.carousel');
    })
})
