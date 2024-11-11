//links transitions
$("nav a[href*='#']").on("click", function (e) {
    e.preventDefault();
    $("nav a").removeClass("activeLink");
    $(this).addClass("activeLink");
    link = $(this.hash);
    if (link.length) {
        $("html, body").animate({
            scrollTop: link.offset().top - 50
        })  //end animate  
    } //end if
})

function homeActiveToggle() {
    
    let altura = $(window).scrollTop();
    
    if ( altura >= 704 )   {
        $("nav a").removeClass("activeLink");
        $("#aInfo").addClass("activeLink");
    } else if (altura < 804) {
        $("nav a").removeClass("activeLink");
        $("#aHome").addClass("activeLink");
    }
}
$(document).on("load scroll", homeActiveToggle);

//end links transitions