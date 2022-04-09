$('.playButton').on('click', function(ev) {
    $('.youtubeWrapper').fadeIn();
    player1.playVideo();
});    
function closeUtube(){
    $('.youtubeWrapper').fadeOut();
    pause();
}
  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  var player1;
  function onYouTubeIframeAPIReady(){
    player1 = new YT.Player('vid', {
      videoId: 'ytjF0RlImXI'
    });
  };
  function pause(){
    player1.pauseVideo(); // <---- Pause method!
  };