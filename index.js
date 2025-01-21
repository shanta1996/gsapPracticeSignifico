
gsap.to('.imgDiv',{
    '--clip':'0%',
    duration:2,
    delay:2,
    scrollTrigger:{
        trigger:'.imgDiv',
        scrub:2,
        start:'top top',
        end:'bottom bottom',
        markers:true,
    }
})