const overlay = document.getElementById("projectOverlay");

const image = document.getElementById("modalImage");

const title = document.getElementById("modalTitle");

const description = document.getElementById("modalDescription");

const number = document.getElementById("modalNumber");

const tags = document.getElementById("modalTags");

const github = document.getElementById("githubLink");

const live = document.getElementById("liveLink");

document.querySelectorAll(".project-card").forEach(card=>{
    card.onclick=()=>{
        overlay.classList.add("active");
        gsap.from(".project-modal",{
        scale:0.85,
        opacity:0,
        duration:0.8,
        ease:"power3.out"});
        image.src=card.dataset.image;
        title.textContent=card.dataset.title;
        description.textContent=card.dataset.description;
        number.textContent=card.dataset.number;
        github.href=card.dataset.github;
        live.href=card.dataset.live;
        tags.innerHTML="";
        card.dataset.tags.split(",").forEach(tag=>{
            const span=document.createElement("span");
            span.textContent=tag;
            tags.appendChild(span);
            gsap.from(span,{
                opacity:0,
                y:30,
                duration:0.4,
                delay:0.08
            });
        });
    };
});

document.querySelector(".close-project").onclick=()=>{
    overlay.classList.remove("active");
};

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        overlay.classList.remove("active");
    }
});