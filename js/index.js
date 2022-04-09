$(document).ready(function(){
    $('.navButt').on('click',showHideMobileNav);
})
function showHideMobileNav(){
    $('.mobNavList').fadeToggle();
    $('.navButt i').toggleClass('fa-close');
}