gsap.registerPlugin(ScrollTrigger);

gsap.timeline({
    scrollTrigger:{
        trigger:"#hero",
        start:"top top",
        end:"bottom top",
        scrub:true
    }
})

.to(".hero-title",{
    scale:18,
    ease:"none"
},0)

.to(".hero-title",{
    opacity:0,
    filter:"blur(20px)"
},0.4)

.to(".hero-content",{
    opacity:0
},0.5);