// NOTICE: This file is jQuery-only, and will NOT work on any pages that do not have jQuery imported

$(document).ready(function() {
    console.log("Initialized jQuery functions");
    
     setTimeout(function() {
        $("#jq-loader").fadeOut("slow");
        $(".hide").fadeIn("slow");
        console.log("Fading process completed");
     }, 2500);
});
