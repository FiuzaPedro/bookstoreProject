let i = 0;
    function slideShow() {        
        let btns = $(".btnSlideLeft, .btnSlideRight");    
        let imgSlides = $(".imgSlides"); let h1Slide = $(".h1Slide");
        let arrayImgs = ["./img/books5.jpg", "./img/books6.jpg", "./img/books7.jpg", "./img/books1.jpg"];
        
        function autoplay() {
            
            h1Slide.css("opacity", 0);                            
            imgSlides.animate({
            marginLeft: "-300%"
            }, 50)
            .delay(50)
                    .attr("src", arrayImgs[i])
                    .animate({
                        marginLeft: "0"
                    }, 500);
                    setTimeout(function () {
                        h1Slide.css("opacity", 1);
                    }, 1000);                
                i++;
                if (i == arrayImgs.length  || i < 0) {                        
                    i = 0;            
                }
        } //end autoplay
        
        setInterval(autoplay, 5000);

            btns.on("click", function () {                
                currentElement = $(this).attr("class");
                if (currentElement == "btnSlideLeft") {
                    i--; 
                    if ( i < 0) {                    
                    i = arrayImgs.length - 1;            
                }   
                    h1Slide.css("opacity", 0);
                    imgSlides.stop().animate({
                        marginLeft: "-300%"
                    }, 50)
                    .delay(50)
                    .attr("src", arrayImgs[i])
                    .stop()
                    .animate({
                        marginLeft: "0"
                    }, 500);
                    setTimeout(function () {
                        h1Slide.css("opacity", 1);
                    }, 1000);
                    
                    
                } else if(currentElement == "btnSlideRight"){                    
                    i++;
                    if (i == arrayImgs.length  || i < 0) {                        
                        i = 0;            
                    }
                    h1Slide.css("opacity", 0);                            
                    imgSlides.stop().animate({
                        marginLeft: "300%"
                    }, 50)
                    .delay(50)
                    .attr("src", arrayImgs[i])
                    .stop()
                    .animate({
                        marginLeft: "0"
                    }, 500);
                    setTimeout(function () {
                        h1Slide.css("opacity", 1);
                    }, 1000);
                } //end else if 
            })  //btns function  
        
    } //end slideshow function

//links transitions

$("nav a[href*='#']").on("click", function (e) {
    //e.preventDefault();
    $("nav a").removeClass("activeLink");
    $(this).addClass("activeLink");
    link = $(this.hash);
    if (link.length) {
        $("html, body").animate({
            scrollTop: link.offset().top - 50
        })  //end animate  
    } //end if
})
//end links transitions


$(window).on("load", slideShow);    
$(document).on("scroll", function () {
    if($(window).scrollTop() > 20 ) {
        $("header").css({                        
            paddingTop:0
        });        
    } else {
        $("header").css({            
            paddingTop:"2%"
        });
    }
})


//evento dos testimonials
let btns = $("#btn1, #btn2, #btn3"); //array de buttons testimonials
let testimonialArray = $(".t1, .t2, .t3");
btns.on("click", function () {
    let btnAlvo = $(this).attr("id");
    switch (btnAlvo) {
        case "btn1":
        $("button").not("#btn1").removeClass("activeTestimonial");
        $("#btn1").addClass("activeTestimonial");
            testimonialArray.not(0).css("left", "-100%" );
            testimonialArray.eq(0).css("left", "0");
        break;
        case "btn2":
        $("button").not("#btn2").removeClass("activeTestimonial");
        $("#btn2").addClass("activeTestimonial");   
            testimonialArray.not(1).css("left", "-100%" );
            testimonialArray.eq(1).css("left", "0");
        break;
        case "btn3":
        $("button").not("#btn3").removeClass("activeTestimonial");
        $("#btn3").addClass("activeTestimonial");
            testimonialArray.not(2).css("left", "-100%" );
            testimonialArray.eq(2).css("left", "0");
        break; 
    } //end switch case
}) //end function dos btns
//end evento dos testimonials

let mobileMenu = document.getElementById("burgerMenu");
function changingState() {
    this.classList.toggle("change");
}
mobileMenu.addEventListener("click", changingState);