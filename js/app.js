window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};

window.addEventListener("load", () => {
    window.scrollTo(0, 0);
});



let lastScroll=0;

window.addEventListener("scroll",()=>{
    const nav=document.querySelector(".navbar");
    const current=window.pageYOffset;
    
    if(current>lastScroll){
        nav.style.transform="translate(-50%,-120px)";
    }
    else{
        nav.style.transform="translate(-50%,0)";
    }
    lastScroll=current;
});

const sections = document.querySelectorAll("main section");
const navLinks = document.querySelectorAll(".menuGlass nav a");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        const id = entry.target.id;

        navLinks.forEach(link => {
            link.classList.toggle(
                "active-link",
                link.getAttribute("href") === `#${id}`
            );
        });
    });
}, {
    threshold: 0.5
});

sections.forEach(section => observer.observe(section));

const lenis = new Lenis({
        duration:1.4,
        smoothWheel:true,
        touchMultiplier:1.5,
    });

    function raf(time){
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
requestAnimationFrame(raf);

window.addEventListener("scroll",()=>{
    const scroll=
    window.scrollY;
    const height=
    document.body.scrollHeight-
    window.innerHeight;
    progressBar.style.width=
    (scroll/height)*100+"%";
});

window.addEventListener("mousemove",(e)=>{
    mouseGlow.style.left=e.clientX-200+"px";
    mouseGlow.style.top=e.clientY-200+"px";
});

const blobs=document.querySelectorAll(".blob");

window.addEventListener("mousemove",(e)=>{
    const x=e.clientX/window.innerWidth;
    const y=e.clientY/window.innerHeight;
    blobs.forEach((blob,index)=>{
        const move=(index+1)*25;
        blob.style.transform=
        `translate(
        ${x*move}px,
        ${y*move}px
        )`;
    });
});

document.querySelectorAll(".project-card").forEach(card=>{
    card.addEventListener("mousemove",(e)=>{
        const rect=card.getBoundingClientRect();
        const x=e.clientX-rect.left;
        const y=e.clientY-rect.top;
        const rotateY=((x-rect.width/2)/18);
        const rotateX=-((y-rect.height/2)/18);
        card.style.transform=
        `rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)`;
    });
    card.addEventListener("mouseleave",()=>{
        card.style.transform="";
    });
});













