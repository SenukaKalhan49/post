// ===============================
// Mobile Menu
// ===============================

const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");

if(menuBtn && menu){
    menuBtn.addEventListener("click", ()=>{
        menu.classList.toggle("active");
    });
}


// ===============================
// Scroll Reveal Animation
// ===============================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
},{
    threshold:0.15
});


sections.forEach(section=>{
    section.style.opacity="0";
    section.style.transform="translateY(50px)";
    section.style.transition="1s ease";
    observer.observe(section);
});


// ===============================
// Gold Floating Particles
// ===============================

const particles = document.querySelector(".particles");

if(particles){

    for(let i=0;i<40;i++){

        let span=document.createElement("span");

        span.style.left=Math.random()*100+"%";
        span.style.top=Math.random()*100+"%";
        span.style.animationDuration=(3+Math.random()*5)+"s";

        particles.appendChild(span);

    }

}


// ===============================
// Gallery Filter
// ===============================

function showGallery(category){

    const items=document.querySelectorAll(".gallery-item img");

    items.forEach(item=>{

        if(category==="all" || item.classList.contains(category)){

            item.style.display="block";

        }
        else{

            item.style.display="none";

        }

    });

}


// ===============================
// Instagram Style Lightbox
// ===============================

const galleryImages = document.querySelectorAll(".gallery-item img");

const lightbox = document.getElementById("lightbox");

const lightboxImg = document.getElementById("lightbox-img");

const closeBtn = document.querySelector(".close");

const nextBtn = document.querySelector(".next");

const prevBtn = document.querySelector(".prev");


let current = 0;



galleryImages.forEach((img,index)=>{

    img.addEventListener("click",()=>{

        current=index;

        lightbox.style.display="flex";

        lightboxImg.src=img.src;

    });

});



// Close

if(closeBtn){

    closeBtn.onclick=()=>{

        lightbox.style.display="none";

    };

}



// Next Image

if(nextBtn){

    nextBtn.onclick=()=>{

        current++;

        if(current >= galleryImages.length){

            current=0;

        }

        lightboxImg.src=galleryImages[current].src;

    };

}



// Previous Image

if(prevBtn){

    prevBtn.onclick=()=>{

        current--;

        if(current < 0){

            current=galleryImages.length-1;

        }

        lightboxImg.src=galleryImages[current].src;

    };

}



// Click outside close

if(lightbox){

    lightbox.addEventListener("click",(e)=>{

        if(e.target === lightbox){

            lightbox.style.display="none";

        }

    });

}



// Keyboard Control

document.addEventListener("keydown",(e)=>{

    if(!lightbox || lightbox.style.display!=="flex") return;


    if(e.key==="ArrowRight"){

        nextBtn.click();

    }


    if(e.key==="ArrowLeft"){

        prevBtn.click();

    }


    if(e.key==="Escape"){

        lightbox.style.display="none";

    }

});



// ===============================
// Project Form
// ===============================

const projectForm=document.querySelector(".project-form");


if(projectForm){

    projectForm.addEventListener("submit",(e)=>{

        e.preventDefault();

        alert("Your project request has been received!");

    });

}