$(function(){
    // bottom to top
    $(".bottom_to_top").click(function(){
        $("body,html").animate({scrollTop:0},1000)
    });
    $(window).scroll(function(){
        let scroll = $(this).scrollTop()
        console.log(scroll);
        if(scroll > 400){
            $(".bottom_to_top").fadeIn(600)
        }else{
            $(".bottom_to_top").fadeOut(600)
        }
        if(scroll > 200){
            $(".nav").addClass("fixed")
        }else{
            $(".nav").removeClass("fixed")
        }
    })
    // ------preloader start here----
    $(window).on("load", function(){
        $(".preloader_main").delay(2000).fadeOut(500)
    })

	// ========== portfolio active menu ========
	$(".list__btn").click(function () {
		console.log("clicked");
		$(this).addClass("btn__active").siblings().removeClass("btn__active");
	})

	var mixer = mixitup('.work_item_mix', {
		controls: {
			toggleLogic: 'and'
		}
	  });

});

// ----------------typed--------------
$(function(){
	$(".typed").typed({
		strings: ["Future Web Developer.", "Web designer."],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 20,
		// time before typing starts
		startDelay: 120,
		// backspacing speed
		backSpeed: 1,
		// time before backspacing
		backDelay: 500,
		// loop
		loop: true,
		// false = infinite
		loopCount: 5,
		// show cursor
		showCursor: false,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
		// call when done callback function
		callback: function() {},
		// starting callback function before each string
		preStringTyped: function() {},
		//callback for every typed string
		onStringTyped: function() {},
		// callback for reset
		resetCallback: function() {}
	});
});

// ============= slick slider ==========
$('.slick__slider').slick({
	infinite: true,
	slidesToShow: 2,
	slidesToScroll: 1,
	dots: true,
	arrows: false,
	// centerMode: true,
	autoplay: true,
	autoplaySpeed: 2000,
	responsive: [
	  {
		breakpoint: 768,
		settings: {
		  slidesToShow: 1,
		  autoplay: true,
		  autoplaySpeed: 2500,
		}
	  }
	]
  });