var homeSiteUrl = $('#globalSiteUrl').val();
jQuery(document).ready(function() {
	if (typeof fetchTrustPilotReviews !== "undefined") {
		fetchTrustPilotReviews();
	}

	initSlickSlider(".testimonialsN");

	//Go Down
	var scrolled=0;
	jQuery('#Down').on('click' ,function(){
		jQuery('html,body').animate({
			scrollTop: h - 47
		},500);
	});

	//For Responsive Menu
	jQuery('#menu-btn').click(function(){
		jQuery('button#menu-btn').toggleClass('active');
		jQuery('#header #nav').slideToggle(400);
	});
	if(jQuery('#header ul>li:has(> .subSection)')){
		jQuery('#header ul>li:has(> .subSection)').addClass('hasSub');
	}
	else{
		alert("no");
	}

	//For LyonCarosel
	jQuery('#LyonCarosel').carousel({
		interval: 10000
	});

	//For LyonCarosel
	jQuery('#blogItem').carousel({
		interval: 10000
	});

	//Feedback Bar
	jQuery('#jqmeter-vertical').jQMeter({goal:'10,000',raised:'9,500',orientation:'vertical',width:'32px',height:'200px',barColor:'#2db2d3'});

	//For Client's Logos
	jQuery('.client-logos').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		autoplay:false,
		autoplaySpeed: 2000,
		responsive:
		[{
			breakpoint:1220,
			settings:{
				slidesToShow:4,
				slidesToScroll:4,
				infinite: true,
				dots: true
			}
		},
		{
			breakpoint:1050,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3
			}
		},
		{
			breakpoint:767,
			settings:{
				slidesToShow: 2,
				slidesToScroll: 2
			}
		},
		{
			breakpoint:520,
			settings:{
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
		]
	});
	//For Partners's Logos
	jQuery('.partners-logos').slick({
		slidesToShow: 7,
		slidesToScroll: 1,
		autoplay:false,
		autoplaySpeed: 2000,
		responsive:
		[{
			breakpoint:1220,
			settings:{
				slidesToShow:5,
				slidesToScroll:1,
				infinite: true,
				dots: true
			}
		},
		{
			breakpoint:1050,
			settings: {
				slidesToShow:4,
				slidesToScroll:1
			}
		},
		{
			breakpoint:767,
			settings:{
				slidesToShow:3,
				slidesToScroll: 1
			}
		},
		{
			breakpoint:520,
			settings:{
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},
		{
			breakpoint:480,
			settings:{
				slidesToShow:1,
				slidesToScroll: 1
			}
		}
		]
	});


	// For Steps Section View
	jQuery('a.pageS').click(function(){
		jQuery('html, body').animate({
			scrollTop: jQuery( jQuery.attr(this, 'href') ).offset().top - 62
		}, 900);
		return false;
	});

	//For User Testimonial
	jQuery('.testimonials').slick({
		slidesToShow:2,
		slidesToScroll:1,
		autoplay:true,
		autoplaySpeed:8000,
		responsive:
		[{
			breakpoint:992,
			settings: {
				slidesToShow:1,
				slidesToScroll:1
			}
		}
		]
	});

	//For News Slider
	jQuery(function(){
		jQuery('#marquee-vertical').marquee();
	});

	// For Video Stop
	jQuery('.close').on('click', function() {
		jQuery('.modal-body div iframe').attr('src', '');
		jQuery('.modal-body div video').attr('src', '');
	});

	// For Lainding Desktop and Video Banner
	var h = 665;
	jQuery('#welcome').css('height', h );

	// For Mobile Devices Lainding view
	var screenWidth2	= window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	var screeNheight	= window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
	if(screenWidth2 < 767  ){
		jQuery('.home-lainding').css('height', screeNheight);
		jQuery('#embed_Banner').css('height',screeNheight);
		jQuery('#welcome').css('height',screeNheight-124);
	}

});

// For Mobile Phone Laindaing View

jQuery(window).resize(function(){
	var screenWidth3 	= window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	var screeNheight2	= window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
	if(screenWidth3 < 767){
		jQuery('.home-lainding').css('height', screeNheight2);
		jQuery('#embed_Banner').css('height',screeNheight2);
		jQuery('#welcome').css('height',screeNheight2-124);
	}
});

// For Popups
jQuery("#img1").on('click',function(){
	jQuery("#popLzyLdr").show();
	jQuery("#myModalLabel1, #video1, #ifr1").show();
	jQuery("#myModalLabel2, #myModalLabel3, #myModalLabel4, #myModalLabel5, #myModalLabel6, #video2, #video3, #video4, #video5, #video6").hide();

	jQuery("#ifr1").attr("src", "//www.youtube.com/embed/Lt9MoaZE7ew");
	jQuery('#ifr1').load(function(){
		jQuery("#popLzyLdr").hide();
	});
});
jQuery("#img2").on('click',function(){
	jQuery("popLzyLdr").show();
	jQuery("#myModalLabel2, #video2, #ifr2").show()
	jQuery("#myModalLabel1, #myModalLabel3, #myModalLabel4, #myModalLabel5, #myModalLabel6, #video1, #video3, #video4, #video5, #video6").hide();

	jQuery("#ifr2").attr("src", "//www.youtube.com/embed/XJxSU4t_2SQ");
	jQuery('#ifr2').load(function(){
		jQuery("#popLzyLdr").hide();
	});
});
jQuery("#img3").on('click',function(){
	jQuery("popLzyLdr").show();
	jQuery("#myModalLabel3, #video3, #ifr3").show()
	jQuery("#myModalLabel2, #myModalLabel1, #myModalLabel4, #myModalLabel5, #myModalLabel6, #video2, #video1, #video4, #video5, #video6").hide();

	jQuery("#ifr3").attr("src", "//www.youtube.com/embed/owZKRNa9EbI");
	jQuery('#ifr3').load(function(){
		jQuery("#popLzyLdr").hide();
	});
});
jQuery("#img4").on('click',function(){
	jQuery("popLzyLdr").show();
	jQuery("#myModalLabel4, #video4, #ifr4").show()
	jQuery("#myModalLabel2, #myModalLabel3, #myModalLabel1, #myModalLabel5, #myModalLabel6, #video2, #video3, #video1, #video5, #video6").hide();

	jQuery("#ifr4").attr("src", "//www.youtube.com/embed/o5F3_hMd07A");
	jQuery('#ifr4').load(function(){
		jQuery("#popLzyLdr").hide();
	});
});
jQuery("#img5").on('click',function(){
	jQuery("popLzyLdr").show();
	jQuery("#myModalLabel5, #video5, #ifr5").show()
	jQuery("#myModalLabel2, #myModalLabel3, #myModalLabel1, #myModalLabel4, #myModalLabel6, #video2, #video3, #video1, #video4, #video6").hide();

	jQuery("#ifr5").attr("src", homeSiteUrl+"/fr/presse/TF1-FRETBAY.mp4");
	jQuery('#ifr5').load(function(){
		jQuery("#popLzyLdr").hide();
	});
});
jQuery("#img6").on('click',function(){
	jQuery("popLzyLdr").show();
	jQuery("#myModalLabel6, #video6, #ifr6").show()
	jQuery("#myModalLabel2, #myModalLabel3, #myModalLabel1, #myModalLabel4, #myModalLabel5, #video2, #video3, #video1, #video4, #video5").hide();

	jQuery("#ifr6").attr("src", "https://www.youtube.com/embed/tTwnSzxKt9k");
	jQuery('#ifr6').load(function(){
		jQuery("#popLzyLdr").hide();
	});
});

/*Distance scroll Slider*/
/*jQuery(window).on('scroll', function() {
	var winScroll = jQuery(window).scrollTop();
	var borderHeight = jQuery('.dist-border').height()+40;
	var scrollPercent = (winScroll / borderHeight) * 100;

	if ( winScroll <= 900 ) {
		jQuery('.truck-img').css('top', scrollPercent);
	}
});*/

if (jQuery(".vehicle-img").length && typeof jQuery(".vehicle-img").stick_in_parent !== "undefined") {
	jQuery(".vehicle-img").stick_in_parent({
		offset_top: 400
	});
}

function initSlickSlider(el) {
	//For User Testimonial
	jQuery(el).slick({
		slidesToShow:3,
		slidesToScroll:1,
		autoplay:false,
		autoplaySpeed:8000,
		responsive:
		[{
			breakpoint:992,
			settings: {
				slidesToShow:2,
				slidesToScroll:1
			}
		},
		{
			breakpoint:767,
			settings:{
				slidesToShow:1,
				slidesToScroll: 1
			}
		}
		]
	});
}

jQuery(window).on('scroll load', function() {
	if ( jQuery(window).scrollTop() > 0 ) {
		jQuery('body').addClass('sticky');
	}else{ jQuery('body').removeClass('sticky'); }
});

function fetchTrustPilotReviews() {
	 jQuery.ajax({
	  url: homeSiteUrl + '/fr/index-components/trustpilot.php?lang='+$('html').attr('lang'),
	  type: 'GET',
	})
	.done(function(data) {
		if (jQuery("section#testimonialNew").length) {
			jQuery("section#testimonialNew").html(data);
			initSlickSlider(".testimonialsN");
		}
	})
	.fail(function() {
	  console.log("Failed to load trustpilot statistics - please refer to footer/common-scripts.");
	});
}