count=0;
lay2Slider(count);
function lay2Slider(vcount){
    var selDoc=document.getElementsByClassName('lay2Slides');
    for(i=0;i<selDoc.length;i++){
        selDoc[i].style.display='none';
    }
    selDoc[vcount].style.display='flex';
    document.querySelector('.nums').innerHTML=vcount+1+'/4';
    gsap.from(selDoc[vcount], {opacity:0.5,duration: 0.5, x:150 });
    // gsap.from(selDoc[vcount].children[0],{opacity:0,duration:1,y:-50,delay:1.5});
    var tl = gsap.timeline({repeat: 0, repeatDelay: 1});
    var animEle=selDoc[vcount].children[0];
    tl.from(animEle.children[0],{opacity:0,duration:1,y:50});
    tl.from(animEle.children[1],{opacity:0,duration:1,y:50});
    tl.from(animEle.children[2],{opacity:0,duration:1,y:50});
}
function lay2Plus(){
    var selDoc=document.getElementsByClassName('lay2Slides');
    count+=1;
    if(count>=selDoc.length){
        count=0;
    }
    lay2Slider(count);
}
function lay2Minus(){
    var selDoc=document.getElementsByClassName('lay2Slides');
    count-=1;
    if(count<0){
        count=selDoc.length-1;
    }
    lay2Slider(count);
}