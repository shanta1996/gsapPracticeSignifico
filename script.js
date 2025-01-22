const homePageAnimation=()=>{
    gsap.set('.backLayer',{
        scale:5
    })
    var tl=gsap.timeline({
        scrollTrigger:{
            trigger:'.home',
            ease:Power2,
            scrub:1,
            start:'top top',
            end:'bottom bottom',
            // markers:true,
            // pin:true,
        }
    })
    tl.to('.imageDiv',{
        '--clip':'0%',
    },'a')
    
    tl.to(".backLayer", {
      scale: 1,
    },'a');
    
    tl.to(".lft", {
    xPercent:-10,
    stagger:0.1
    },'b');
    tl.to(".rgt", {
    xPercent:10,
    stagger:0.1
    },'b');
    
    
    
}
const realPageAnimation=()=>{
    gsap.to('.slide',{
        xPercent:-300,
        ease:Power4,
        scrollTrigger:{
            trigger:'.real',
            start:'top top',
            end:'bottom bottom',
            markers:true,
            scrub:2,
            pin:true,
        
        }
    })
}

// document.querySelectorAll('.listElem').forEach((e)=>{
//     e.addEventListener('mousemove',(dets)=>{
// gsap.to(this.querySelector(".picture"),{
//     opacity:1
// })
//     })
//     e.addEventListener('mouseleave',(dets)=>{

//     })
// })

document.querySelectorAll(".listElem").forEach(function(e){
e.addEventListener('mousemove',function(details){
    gsap.to(this.querySelectorAll('.picture'),{
        opacity:1
    })
})
})
homePageAnimation()
realPageAnimation()