/* =====================================
   THE SMART PROGRAMMER PORTFOLIO
   JavaScript System
   ===================================== */


/* MOBILE MENU */

const menu = document.querySelector(".menu");
const navLinks = document.querySelector(".nav-links");


if(menu){

    menu.addEventListener("click",()=>{

        navLinks.classList.toggle("active");

    });

}



/* CLOSE MOBILE MENU AFTER CLICK */


document.querySelectorAll(".nav-links a").forEach(link=>{


    link.addEventListener("click",()=>{

        navLinks.classList.remove("active");

    });


});






/* SCROLL ANIMATION */


const observer = new IntersectionObserver(
(entries)=>{


entries.forEach(entry=>{


    if(entry.isIntersecting){


        entry.target.style.opacity="1";

        entry.target.style.transform="translateY(0)";


    }


});


},
{
    threshold:0.15
});





document.querySelectorAll(".card, .project-card, .skills div")
.forEach(element=>{


    element.style.opacity="0";

    element.style.transform="translateY(40px)";

    element.style.transition="0.8s ease";


    observer.observe(element);


});








/* EMAIL SYSTEM */


function sendEmail(event){


event.preventDefault();



const name=document.getElementById("name").value;

const email=document.getElementById("email").value;

const message=document.getElementById("message").value;



const receiver="thesmartprogrammer591@gmail.com";



const subject=
`Portfolio Contact From ${name}`;



const body=

`
Name:
${name}


Email:
${email}


Message:
${message}

`;


window.location.href=

`mailto:${receiver}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;



}









/* COPYRIGHT PROTECTION */


/*
   This does not make content impossible
   to copy, but protects against basic
   casual copying.
*/



document.addEventListener(
"contextmenu",
function(e){

e.preventDefault();

}
);






/* Disable common copy shortcuts */


document.addEventListener(
"keydown",
function(e){


if(

(e.ctrlKey && e.key==="c") ||

(e.ctrlKey && e.key==="u") ||

(e.ctrlKey && e.key==="s") ||

(e.ctrlKey && e.key==="p")

){


e.preventDefault();


}



});








/* Disable image dragging */


document.querySelectorAll("img")
.forEach(img=>{


img.setAttribute(
"draggable",
"false"
);


});









/* DYNAMIC YEAR FOOTER */


const year = new Date().getFullYear();


const footerText=document.querySelector("footer p");


if(footerText){


footerText.innerHTML=

`
© ${year} Gert Lula | The Smart Programmer
<br>
All Rights Reserved
`;


}







/* INVISIBLE BRAND SIGNATURE */


console.log(
`
=================================

The Smart Programmer
Created by Gert Lula

Software Engineering Portfolio

=================================
`
);

/* =========================
   LOADER
========================= */


window.addEventListener(
"load",
()=>{


const loader=document.querySelector(".loader");


setTimeout(()=>{


loader.style.opacity="0";


setTimeout(()=>{


loader.style.display="none";


},500);



},1200);



});








/* =========================
   PARTICLES
========================= */


const particleContainer=
document.getElementById("particles");



if(particleContainer){


for(let i=0;i<60;i++){


let particle=
document.createElement("div");


particle.className="particle";



particle.style.left=
Math.random()*100+"%";



particle.style.animationDuration=
(5+Math.random()*10)+"s";



particle.style.opacity=
Math.random();



particleContainer.appendChild(particle);



}


}







/* =========================
   CUSTOM CURSOR
========================= */


const cursor=
document.querySelector(".cursor");


document.addEventListener(
"mousemove",
(e)=>{


if(cursor){


cursor.style.left=
e.clientX+"px";


cursor.style.top=
e.clientY+"px";


}


});

/* =========================
   TYPING ANIMATION
========================= */


const text =
"Software Engineer | Web Developer | Founder";


let index=0;


const typing=
document.getElementById("typing-text");



function type(){

if(index < text.length){

typing.innerHTML += text.charAt(index);

index++;

setTimeout(type,80);

}

}


if(typing){

type();

}