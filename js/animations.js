// NOTICE: This file is jQuery-only, and will NOT work on any pages that do not have jQuery imported

$(document).ready(function() {
    console.log("Initialized jQuery functions");
    
     setTimeout(function() {
        $("#jq-loader").fadeOut("slow");
        $(".hide").removeClass("hide");
        setTimeout(function() {
            $(".fadeIn").fadeIn("slow");
        }, 1000);
        console.log("Fading process completed");
     }, 2500);
});
