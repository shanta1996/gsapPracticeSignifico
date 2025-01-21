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



homePageAnimation()
realPageAnimation()