const loader = document.getElementById("loader");

window.addEventListener("load",()=>{
    setTimeout(()=>{
        loader.style.opacity=0;
        loader.style.pointerEvents="none";
    },2600);
});