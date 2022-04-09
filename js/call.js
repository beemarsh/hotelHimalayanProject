document.querySelector('.call').addEventListener('click',()=>{
    window.location.href='tel:+977-985-7030791';
})
document.querySelector('.teleIco').addEventListener('click',()=>{
    window.location.href='tel:+977-985-7030791';
})
document.querySelector('#popup__toggle').addEventListener('click',()=>{
    window.location.href='tel:+977-985-7030791';
})
document.querySelector('.fbIco').addEventListener('click',()=>{
    window.location.href='https://www.facebook.com/hotelhimalayanyak';
})
document.querySelector('.instaIco').addEventListener('click',()=>{
    window.location.href='https://www.facebook.com';
})
document.querySelector('.tweetIco').addEventListener('click',()=>{
    window.location.href='https://www.twitter.com';
})
$('#mailGmail').click(()=>{
    $('.emailMe').fadeIn();
    window.location.href='#beeMail';
})
$('.mailIco').click(()=>{
    $('.emailThem').fadeIn();
})
$(document).mouseup(function(e) 
{
    var container = $(".emailMe");
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
        $('.emailMe').fadeOut();
    }
});
$(document).mouseup(function(e) 
{
    var container = $(".emailThem");
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
        $('.emailThem').fadeOut();
    }
});
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