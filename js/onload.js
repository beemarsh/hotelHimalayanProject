window.onload = () => {
        setTimeout(setOut,1000);
  };
  function setOut(){
    $(".preLoader").fadeOut('3000');
    $(".preLoader").hide();
    AOS.init();
    if(checkFromWHereUserComes==false){
      window.scrollTo({top: 0, behavior: 'smooth'});
    }
  }

  function checkFromWHereUserComes(){
    var pathName=document.referrer;
    var splitpathName=pathName.split('/');
    if(splitpathName[4]=='posts' || splitpathName[4]=='events' ){
      return true;
    }else{
      return false;
    }
  }