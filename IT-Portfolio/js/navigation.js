const menuButton=document.getElementById("menuButton");

const overlay=document.getElementById("menuOverlay");

menuButton.onclick=()=>{
    menuButton.classList.toggle("active");
    overlay.classList.toggle("active");
};

overlay.onclick=(e)=>{
    if(e.target===overlay){
        overlay.classList.remove("active");
        menuButton.classList.remove("active");
    }
};

document.querySelectorAll(".menuGlass a").forEach(link=>{
    link.onclick=()=>{
        overlay.classList.remove("active");
        menuButton.classList.remove("active");
    };
});