// NOTICE: This file is jQuery-only, and will NOT work on any pages that do not have jQuery imported

$(document).ready(function() {
    console.log("Initialized jQuery functions");
    
     setTimeout(function() {
        $("#jq-loader").fadeOut("fast");
        $(".hide").removeClass("hide").addClass("show");
        console.log("Fadeout process completed");
     }, 2500);
     setTimeout(function() {
            $(".fadeIn").fadeIn("slow");
            $("#splash-screen").animate({"background-color": "#56402B"});
     }, 3000);
});
