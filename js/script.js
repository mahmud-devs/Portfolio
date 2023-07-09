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


	//   ========= Nav part Start =============
    $(".nav-link").on('click',function(event){
        if(this.hash !== ""){
            event.preventDefault();
        let hash = this.hash;
        $('html,body').animate({
            scrollTop: $(hash).offset().top
        },1000,function(){
            window.location.hash = hash;
        });
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




  // ========= form validation ======
let username = document.querySelector(".name");
let email = document.querySelector(".email");
let subject = document.querySelector(".subject");
let text = document.querySelector(".text");
let btn = document.querySelector(".form__btn");
let msg = document.querySelector(".error__msg");
let mail_valid = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

let nameerr = document.querySelector(".name__err");
let mailerr = document.querySelector(".mail__err");
let suberr = document.querySelector(".sub__err");
let texterr = document.querySelector(".text__err");




function SendEmail() {
  if (username.value === "") {
    nameerr.innerHTML = "Type your full name";
    nameerr.style.color = "red";
    username.style.borderBottom = "2px solid red";
  } else {
    nameerr.innerHTML = "";
  }

  if (email.value === "") {
    mailerr.innerHTML = "Type your valid email";
    mailerr.style.color = "red";
  } else {
    if (email.value.match(mail_valid)) {
      mailerr.innerHTML = "";
    } else {
      mailerr.innerHTML = "Your email is not valid";

    }
  }

  if (subject.value === "") {
    suberr.innerHTML = "Type a subject";
    suberr.style.color = "red";
  } else {
    suberr.innerHTML = "";
  }

  if (text.value === "") {
    texterr.innerHTML = "Type your message";
    texterr.style.color = "red";
  } else {
    texterr.innerHTML = "";
  }
  // Create an object to store the values
  var bodyValues = {
    "Name": username.value,
    "Email": email.value,
    "Subject": subject.value,
    "Message": text.value,
  };
console.log(bodyValues);
  // Format the values in the email body
  var body = "";
  for (var key in bodyValues) {
    if (bodyValues.hasOwnProperty(key)) {
      body += key + ": " + bodyValues[key] + "<br>";
    }
  }
  // Check if all fields are valid before sending the email
  if (nameerr.innerHTML === "" && mailerr.innerHTML === "" && suberr.innerHTML === "" && texterr.innerHTML === "") {
    // Configure SMTPJS with your SMTP service provider credentials
    Email.send({
      SecureToken: "4e8111f5-eaf4-4d98-aeb7-392791102ad2", // Replace with your SMTPJS token
      To: "mahmudulislam0999@gmail.com",
      From: "mahmudulislam0999@gmail.com",
      Subject: subject.value,
      Body: body,
    }).then(function (message) {
      if (message === "OK") {
        alert("Email sent successfully!");
        // Clear input fields
        username.value = "";
        email.value = "";
        subject.value = "";
        text.value = "";
      } else {
        alert("Error sending email. Please try again later.");
      }
    });
  }
}