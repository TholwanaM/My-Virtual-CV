gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".journey-card").forEach((card, index)=>{
    gsap.from(card,{

        opacity:0,
        y:80,
        duration:1,
        ease:"power3.out",
        scrollTrigger:{
            trigger:card,
            start:"top 85%"
        }
    });
});

const skills = document.querySelectorAll(".skill");

skills.forEach(skill=>{

    skill.addEventListener("mousemove",(e)=>{
            const rect = skill.getBoundingClientRect();

            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const rotateX = -(y - rect.height / 2) / 10;
            const rotateY = (x - rect.width / 2) / 10;

            skill.style.transform = `
            translateY(-10px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            `;
        });
    skill.addEventListener("mouseleave",()=>{
        skill.style.transform="";
    });
});


gsap.from(".skill",{
    opacity:0,
    y:80,
    stagger:0.08,
    duration:1,
    ease:"power3.out",
    scrollTrigger:{
        trigger:"#skills",
        start:"top 75%"
    }
});

gsap.utils.toArray(".project-card").forEach(card => {
    gsap.from(card,{
        opacity:0,
        y:100,
        duration:1.2,
        ease:"power3.out",
        scrollTrigger:{
            trigger:card,
            start:"top 80%"
        }
    });
});


//contacts
gsap.from(".contact-header",{
    opacity:0,
    y:60,
    duration:1,
    scrollTrigger:{
        trigger:"#contact",
        start:"top 80%"
    }
});

gsap.from(".contact-form",{
    opacity:0,
    x:-80,
    duration:1,
    scrollTrigger:{
        trigger:"#contact",
        start:"top 80%"
    }
});

gsap.from(".contact-info a",{
    opacity:0,
    x:80,
    stagger:0.15,
    duration:1,
    scrollTrigger:{
        trigger:"#contact",
        start:"top 80%"
    }
});

gsap.utils.toArray("section").forEach(section=>{
    gsap.from(section,{
        opacity:0,
        y:60,
        duration:1,
        ease:"power2.out",
        scrollTrigger:{
            trigger:section,
            start:"top 85%"
        }
    });
});




















