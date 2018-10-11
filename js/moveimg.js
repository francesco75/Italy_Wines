$(document).ready(function(){
    $(".img1").hover(function(){
        $("#para6").addClass("test1");
       
    });
    $(".img1").mouseout(function(){
        $("#para6").removeClass("test1");
       
    });
});
