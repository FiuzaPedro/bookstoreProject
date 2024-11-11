$("#burgerMenu, .ulMobile").on("click", function () {    
    let mob = $("#mobileLinks");
    mob.toggleClass("activeMenu inactiveMenu");
    mob.css("right", "0%");
})