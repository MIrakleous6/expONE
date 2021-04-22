function delaySim(time) {         //simulates delay in loading time (waits some time and then does something)
    setTimeout(function(){
        $(".loading").addClass("d-none");
        $(".card").removeClass("d-none");
        }, time);
}
function delaySimEx5(time) {         //for Ex5.html
    setTimeout(function(){
        $(".loading").addClass("d-none");
        $("#redDress").attr("src","images/red1.png");
        $("#orangeDress").attr("src","images/orangeDress.png");
        $("#wbEarrings").attr("src","images/earrings1.png");
        $("#pmEarrings").attr("src","images/earrings2.png");
    }, time);
}