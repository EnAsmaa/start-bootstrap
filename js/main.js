"use strict"
try
{
    let openIcon=document.getElementById("nav-icon");
    let closeIcon=document.getElementById("close");
    let nav=document.getElementById("nav-container");

    openIcon.addEventListener('click',()=>{
        nav.classList.toggle("show");

    })
    closeIcon.addEventListener('click',()=>{
        nav.classList.toggle("show");
    })

    let scrollIcon=document.getElementById("scrollIcon");
    let firstSec=document.getElementById("home");
    window.addEventListener('scroll',()=>{
        const homeBottom=firstSec.getBoundingClientRect().top;
        if(homeBottom<0)
        {
            scrollIcon.style.display="block";
        }
        else
        {
            scrollIcon.style.display="none";
        }
        
    })

    scrollIcon.addEventListener('click',()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    })
}
catch(err)
{
    console.log(err);
    
}
