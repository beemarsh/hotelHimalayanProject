count=0;
autoCount=0;
$(document).ready(function(){
    interalContainer=setInterval(sliderPlus,7000);
    slider(0);
});
function slider(counter){
    var elements=document.getElementsByClassName('slides');
    for(i=0;i<elements.length;i++){
        elements[i].style.display='none';
    }
    elements[counter].style.display='block';
    gsap.from(elements[counter],{duration: 2.5, ease: "elastic.out(1, 0.3)", y: -100});
    gsap.from('.textSlider',{opacity:0,duration:1,y:50,delay:1.5});
    count=counter;
    var childs=document.getElementsByClassName('dotContainer')[0].children;
    for(j=0;j<childs.length;j++){
        childs[j].classList.remove('activeDot');
    }
    childs[count].classList.add('activeDot');
    if(interalContainer){
    clearInterval(interalContainer);
    interalContainer=setInterval(sliderPlus,7000);
    }
}
function sliderPlus(){
    var elements=document.getElementsByClassName('slides');
    count+=1;
    if(count>=elements.length){
        count=0;
    }
    slider(count);
}
function sliderMinus(){
    var elements=document.getElementsByClassName('slides');
    count-=1;
    if(count<0){
        count=elements.length-1;
    }
    slider(count);
}
function pauseAutoPlay(){//To pause automatic play of slider
    autoCount+=1;
    if(autoCount%2==1){
        clearInterval(interalContainer);
        interalContainer=false;
        changeIcon(0);
    }else{
        interalContainer=setInterval(sliderPlus,7000);
        changeIcon(1);
    }
}
function changeIcon(checkCounter){
    if(checkCounter==0){
    var selDoc=document.querySelector('.fa-pause');
    selDoc.classList.remove('fa-pause');
    selDoc.classList.add('fa-play');
    }else{
    var selDoc=document.querySelector('.fa-play');
    selDoc.classList.remove('fa-play');
    selDoc.classList.add('fa-pause');
    }
}