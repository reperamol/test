$(document).ready(function(){
	nav = $('.nav');
	wWidth = $(window).width();
	wHeight = $(window).height();

	$(".stretchMe").anystretch();

	fixedNav();
	coverStretch();
	overlayNav();
	arrowDown();
	modifyHeight(".area--about__detail",".area--about__img")

});





function modifyHeight(a,b){
	var elmA = $(a);
	var elmB = $(b);
	var heightA = elmA.outerHeight();
	function modify(){
		elmB.css({
			"height" : heightA
		});
	}
	$(window).on("resize",function(){
		heightA = elmA.outerHeight();
		modify();
	})
	modify();
}


function arrowDown(){
	var trigger = $(".cover__arrow");

	$(window).on("resize",function(){
		wWidth = $(window).width();
		wHeight = $(window).height();
	});
	trigger.on("click",function(e){
		e.preventDefault();
		$('body, html').animate({ scrollTop: wHeight-73 }, 500, "swing");
		return false;
	});

}




function fixedNav(){
	if(!$("html").hasClass("lt-ie9")){
		if(!nav.hasClass('nav--blog')){
		    offset = nav.offset();

			$(window).scroll(function () {
			  if($(window).scrollTop() > offset.top + 400) {
			  	if(!nav.hasClass("fixed")){
				  	nav.hide();
			  	}
			    nav.addClass('fixed');
			    nav.css({
			    });
			    nav.fadeIn();
			  } else {
			    nav.removeClass('fixed');
			    nav.css({
			    });
			  }
			});
		}
	}
}

function coverStretch(){
	var stretchFlag = true;
	$(".stretchMeCover").anystretch(null,null,showStretch);
	var bgContainer = $(".cover--bg");
	var bg = $(".cover--bg .stretchMeCover:first");
	var bgs = $(".cover--bg .stretchMeCover");
	var coverContainer = $(".cover");
	var coverTexts = $(".cover__eyecatch");
	var preloader = $(".cover__preloader");
	var eyecatchContainer = $(".cover__eyecatch--title");
	var eyecatch = $("img:first",eyecatchContainer);
	stretch();

	$(window).on("resize",function(){
		stretch();
	});

	function stretch(){
		wWidth = $(window).width();
		wHeight = $(window).height();


		if(coverContainer.hasClass("cover--secondary")){

			if(wWidth <=982 && wWidth > 522){
				// tablet
				bgs.css({
					"width" : wWidth,
					"height" : wHeight
				});
				coverContainer.css({
					"width" : wWidth,
					"height" : wHeight
				});
			}else if(wWidth <=522){
				// smartphone
				bgs.css({
					"width" : wWidth,
					"height" : wHeight
				});
				coverContainer.css({
					"width" : wWidth,
					"height" : wHeight
				});
			}else if(coverContainer.hasClass("cover--secondary--blog--article")){
				// blog details
				bgs.css({
					"width" : wWidth,
					"height" : wHeight
				});
				coverContainer.css({
					"width" : wWidth,
					"height" : wHeight
				});
			}else if(coverContainer.hasClass("cover--secondary--blog--home")){
				// PC
				bgs.css({
					"width" : wWidth,
					"height" : wHeight*0.6
				});
				coverContainer.css({
					"width" : wWidth,
					"height" : wHeight*0.6
				});
			}else{
				// PC
				bgs.css({
					"width" : wWidth,
					"height" : wHeight*0.75
				});
				coverContainer.css({
					"width" : wWidth,
					"height" : wHeight*0.75
				});
			}

		}else{
			bgs.css({
				"height" : wHeight
			});
			coverContainer.css({
				"height" : wHeight
			});
		}
	}

	function showStretch(){
		if(stretchFlag === true){
			stretchFlag = false;
			// bgs.hide();　こいつのせい

			bgs.css({
				"opacity" : 0
			});

			bg.imagesLoaded(function(){ 
				preloader.fadeOut(function(){
					bg.animate({"opacity" : 1},1000);
					eyecatch.fadeIn(1000);
					if(coverContainer.hasClass("cover--secondary")){
						coverContainer.find("img").animate({"opacity" : 1},1000);
					}
					if(!coverContainer.hasClass("cover--secondary")){

						// アイキャッチをトランジションさせる場合
						// setInterval(coverTransitionEyecatch,4000);

						// 背景をトランジションさせる場合
						setInterval(coverTransitionBg,4000);
					}
				});
			});
		}
	}

	function coverTransitionEyecatch(){
		eyecatch.appendTo(eyecatchContainer).fadeOut();
		eyecatch = $("img:first",eyecatchContainer);
		eyecatch.show();
	}
	function coverTransitionBg(){
		bg.appendTo(bgContainer).animate({"opacity" : 0},1000);
		bg = $(".cover--bg .stretchMeCover:first");
		bg.css("opacity",1);
	}

}






function overlayNav(){

	var navContainer = $(".nav__inner");
	var nav = $(".nav__links");
	var navChild = nav.children();
	var sns = $(".nav__inner .social-accounts");
	var snsChild = sns.children();
	var toggleNavShowing = false;

	var toggleButton = $(".nav__toggle");
	var windowHeight = window.innerHeight ? window.innerHeight : $(window).height();
	var activeHeight = windowHeight-53;
	var links = $('a',nav);

	$(window).on('orientationchange',function(){
		windowHeight = window.innerHeight ? window.innerHeight : $(window).height();
		activeHeight = windowHeight-54;
	});
	$(window).on('touchend',function(){
		windowHeight = window.innerHeight ? window.innerHeight : $(window).height();
		activeHeight = windowHeight-54;
	});

	links.on('click',function(){
		if(toggleNavShowing === true){
				toggleNavShowing = false;
				nav.stop().fadeOut(100);
				sns.stop().fadeOut(100);
				$("html").css("overflow","auto");
				$(window).off('.noScroll');
		}
	});

	toggleButton.on("click",function(e){
		e.preventDefault();
		if(toggleNavShowing === false){

			nav.css({
				"height" : windowHeight
			});
			navChild.css({
				"height" : activeHeight/8,
			});
			snsChild.css({
				"height" : activeHeight/8*2,
			});
			$("a",navChild).css({
				"line-height" : activeHeight/8+"px"
			});
			$("a",snsChild).css({
				"line-height" : activeHeight/8*2+"px"
			});

			toggleNavShowing = true;
			$("i",toggleButton).addClass('fa-times').removeClass("fa-bars");
			nav.stop().fadeIn(300);
			sns.stop().fadeIn(300);
			$("html").css("overflow","hidden");
			$(window).on('touchmove.noScroll', function(e) {
			    e.preventDefault();
			});

		}else{

			toggleNavShowing = false;
			$("i",toggleButton).addClass('fa-bars').removeClass("fa-times");
			nav.stop().fadeOut(100);
			sns.stop().fadeOut(100);
			$("html").css("overflow","auto");
			$(window).off('.noScroll');

		}
	});

}


