checkvalue=false;
$(document).ready(function(){
    $(window).scroll(function(){
        scrollAnimation();//To animate heading Bar on scroll
});
})

// List of Functions Only
function scrollAnimation(){//For sticky header Scrolling
    var pagePosition=window.pageYOffset;
    if(pagePosition>0){
        if(checkvalue==false){
            $('.main-header').addClass('scrollBackground');//BGcolor =white like
            gsap.fromTo(".main-header", {opacity: 0,y:-50}, {opacity: 1, duration: 1,y:0});
            checkvalue=true;
        }
    }else{
        gsap.fromTo(".main-header", {opacity: 0,y:30}, {opacity: 1, duration: 1,y:0});
        $('.main-header').removeClass('scrollBackground');//Add Bgcolor transparent
        checkvalue=false;
    }
}