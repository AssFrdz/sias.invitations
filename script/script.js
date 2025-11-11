window.addEventListener('DOMContentLoaded',()=>{
    var header = document.querySelector("header");
    var menu = document.querySelector(".computer");
    var bar = document.querySelector(".mobile");

    var close = document.querySelector(".close");
    var open = document.querySelector(".open");

    open.addEventListener("click",()=>{
        console.log(menu.style.display);
        if(menu.style.display==='none' || menu.style.display===''){
            menu.style.display='block';
            header.style.height='100%';
            bar.style.display='none';
        }

    });

    close.addEventListener("click",()=>{
        if(menu.style.display!='none' || menu.style.display!=''){
            menu.style.display='none';
            header.style.height='fit-content';
            bar.style.display='flex';
        }
        })


})
