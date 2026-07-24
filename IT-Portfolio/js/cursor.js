const cursor=document.querySelector(".cursor");

const ring=document.querySelector(".cursor-ring");

window.addEventListener("mousemove",(e)=>{
    cursor.style.left=e.clientX+"px";
    cursor.style.top=e.clientY+"px";
    ring.style.left=e.clientX+"px";
    ring.style.top=e.clientY+"px";
});

document.querySelectorAll(".magnetic").forEach(button=>{
    button.addEventListener("mousemove",(e)=>{
        const rect=button.getBoundingClientRect();
        const x=e.clientX-rect.left;
        const y=e.clientY-rect.top;
        button.style.transform=
        `translate(
        ${(x-rect.width/2)/7}px,
        ${(y-rect.height/2)/7}px)`;
    });

    button.addEventListener("mouseleave",()=>{
        button.style.transform="";
    });
});

