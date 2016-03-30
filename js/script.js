$(function(){
	'use strict';
	
	var portfolio = $('.portfolio-items');
	
	$('html').removeClass('no-js').addClass('js');
	
	/*=========================================================================
		Skill Bars Initialization
	=========================================================================*/
	$('.skill').each(function(){
		var $this = $(this),
			percent = $this.data('percent') + '%';
		$this.append("<div class='skill-bar' ><div class='percent' style='width:"+percent+"' ></div></div>");
	});
	
	
	/*=========================================================================
		Magnific Popup (Project Popup initialization)
	=========================================================================*/
	$('.has-popup').magnificPopup({
		type: 'inline',
		fixedContentPos: false,
		fixedBgPos: true,
		overflowY: 'auto',
		closeBtnInside: true,
		preloader: false,
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-zoom-in'
	});
	
	$(window).on('load', function(){
		
		$('body').addClass('loaded');
		
		/*=========================================================================
			Portfolio Grid
		=========================================================================*/
		setTimeout(function(){
			portfolio.shuffle();
		}, 1000);
		
		$('.portfolio-filters > li > a').on('click', function (e) {
			e.preventDefault();
			var groupName = $(this).attr('data-group');
			$('.portfolio-filters > li > a').removeClass('active');
			$(this).addClass('active');
			portfolio.shuffle('shuffle', groupName );
		});
		
		
		/*=========================================================================
			Testimonials Slider (Owl Carousel)
		=========================================================================*/
		$('.testimonials-slider').owlCarousel({
			items: 1
		});
		
	});
	
	
	
	$(window).on('resize', function(){
		
		
		/*=========================================================================
			Update the portfolio grid when window is resized
		=========================================================================*/
		setTimeout(function(){
			portfolio.shuffle('update');
		},1000);
		
	});
	
	
	/*=========================================================================
		Menu Functions
	=========================================================================*/
	$('.menu-btn').on('click', function(e){
		e.preventDefault();
		$('body').toggleClass('show-menu');
	});
	
	$('.menu-items > ul > li > a').on('click', function(e){
		e.preventDefault();
		var $this = $(this),
			section = $( '#' + $this.data('section') );
		if( section.length != 0 ){
			$('body').removeClass('show-menu');
			$('.section.active').removeClass('active');
			setTimeout(function(){
				section.addClass('active');
			}, 300);
		}
		
		setTimeout(function(){
			portfolio.shuffle();
		}, 1000);
		
	});
	
	
	/*=========================================================================
		Contact Form (NOT WORKING IN DEMO ONLY)
	=========================================================================*/
	$('#contact-form').validator().on('submit', function (e) {
		if (!e.isDefaultPrevented()) {
			e.preventDefault();
			var $this = $(this),
				//You can edit alerts here
				alerts = {
					success: 
					"<div class='form-group' >\
						<div class='alert alert-success' role='alert'> \
							<strong>Message Sent!</strong> We'll be in touch as soon as possible\
						</div>\
					</div>",
					error: 
					"<div class='form-group' >\
						<div class='alert alert-danger' role='alert'> \
							<strong>Oops!</strong> Sorry, an error occurred. Try again.\
						</div>\
					</div>"
				};
			$('#contact-form-result').html(alerts.success);
			$('#contact-form').trigger('reset');
		}
	});
	
	
	
	/*=====================================================
		Code For Switching Style (FOR DEMO)
	=====================================================*/
	
	function setActiveStyleSheet(title) {
		var i, a;
		for(i=0; (a = document.getElementsByTagName('link')[i]); i++) {
			if(a.getAttribute('rel').indexOf('style') != -1
			&& a.getAttribute('title')
			&& a.getAttribute('rel').indexOf('alt') != -1 ){
				
				a.disabled = true;
				if(a.getAttribute('title') == title) a.disabled = false;
				
			}
		}
	}
	
	if( typeof Storage != 'undefined' ){
		
		var color = window.localStorage.getItem('color');
		
		if(color != null ){
			setActiveStyleSheet( color );
			$('.colors > a[data-val='+color+']').addClass('active');
		}
		
	}
	
	$('.colors > a').on('click', function(e){
		
		e.preventDefault();
		var color = $(this).data('val');
		setActiveStyleSheet(color);
		$('.colors > a.active').removeClass('active');
		$(this).addClass('active');
		if( typeof Storage != 'undefined' ){
			window.localStorage.setItem('color', color);
		}
	});
	
});