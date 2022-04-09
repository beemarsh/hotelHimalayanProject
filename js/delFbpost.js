window.onload = () => {
    setTimeout(setOut,1000);
};
function setOut(){
$(".preLoader").fadeOut('3000');
$(".preLoader").hide();
AOS.init();
window.scrollTo({top: 0, behavior: 'smooth'});
document.querySelector('.sk-facebook-feed-bottom-follow-btn').remove();
document.querySelector('.sk_branding').remove();
}
$(document).mouseup(function(e) 
{
    var container = $(".mobNavList");
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
        $('.mobNavList').fadeOut();
        $('.navButt i').addClass('fa-bars');
        $('.navButt i').remove('fa-close');
    }
});