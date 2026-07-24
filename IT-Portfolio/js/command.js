const palette=document.getElementById("commandPalette");

const input=document.getElementById("commandInput");

document.addEventListener("keydown",(e)=>{
    if((e.ctrlKey || e.metaKey) && e.key==="k"){
        e.preventDefault();
        palette.classList.toggle("active");
        input.focus();
    }
});

document.addEventListener("keydown",(e)=>{
    if(e.key==="Escape"){
        palette.classList.remove("active");
    }
});

document.querySelectorAll(".palette li").forEach(item=>{
    item.onclick=()=>{
        const link=item.dataset.link;
        if(link.startsWith("#")){
        document.querySelector(link).scrollIntoView({
            behavior:"smooth"
        });
        }else{
        window.open(link);   
        }
        palette.classList.remove("active");
    };
});