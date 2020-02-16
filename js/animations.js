// NOTICE: This file is jQuery-only, and will NOT work on any pages that do not have jQuery imported

$(document).ready(function() {
    console.log("Initialized jQuery functions");
    
     setTimeout(function() {
        $("#jq-loader").fadeOut("fast");
        $(".hide").removeClass("hide").addClass("show");
        console.log("Fadeout process completed");
     }, 2500);
     setTimeout(function() {
            $("#jq-loader").remove();
            $(".loader-padding").remove();
            $(".fadeIn").fadeIn("slow");

            // Inneficient but arguably the best option

            $("#scroll-down").animate({"padding-top": "+=50px"}, 1500);
            $("#scroll-down").animate({"padding-top": "-=50px"}, 1500);
            $("#scroll-down").animate({"padding-top": "+=50px"}, 1500);
            $("#scroll-down").animate({"padding-top": "-=50px"}, 1500);
            $("#scroll-down").animate({"padding-top": "+=50px"}, 1500);
            $("#scroll-down").animate({"padding-top": "-=50px"}, 1500);
            $("#scroll-down").animate({"padding-top": "+=50px"}, 1500);
            $("#scroll-down").animate({"padding-top": "-=50px"}, 1500);
            $("#scroll-down").animate({"padding-top": "+=50px"}, 1500);
            $("#scroll-down").animate({"padding-top": "-=50px"}, 1500);
     }, 3000);
     
     if ($("#main").is(":visible")) {
         console.log("#main div is visible");
         $("#main").animate({padding: "200px 200px 200px 200px"});
     }
});
