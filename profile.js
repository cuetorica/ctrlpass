const cursor_circle = document.querySelector(".cursor-circle"),
    cursor = document.querySelectorAll(".cursor"),
    element = document.querySelectorAll(".getHover");

let timeline = gsap.timeline({
    defaults: {duration: 1.3, ease: "power3.inOut"},
});

timeline
.to(".image-wrap", {
    height: "550px",
    backgroundSize: "100%",
    duration: 1.5,
    ease: "power4.inOut",
})
.to(".image-wrap", {
        height: "320px",
        backgroundPosition:"50% 58%",
        y: "0",
        
}, 1.5).from(".big-name", {
    y: getYDistance(".big-name"),
    duration: 1.3,
    ease:"power3.inOut",
},
    1.5
).from(".hide",{
    opacity:"0",
    
},
    1.5
);

function getYDistance(el) {
    return (
        window.innerHeight - document.querySelector(el).getBoundingClientRect().
        top
    );
}

window.addEventListener("mousemove", (e) => {
   let xPosition = e.clientX;
   let yPosition = e.clientY;

   cursor.forEach(el => {
    el.style.transform = `translate(calc(-50% + ${xPosition}px), calc(-50% + 
    ${yPosition}px))`;
    el.style.opacity = "1";
   });
});

element.forEach(el => {
        el.addEventListener("mouseover", () => {
        cursor_circle.classList.add("biggerCursor");
    });
    el.addEventListener("mouseout", () => {
        cursor_circle.classList.remove("biggerCursor");
    });
});


const buttons = document.querySelectorAll('button');

buttons.forEach( button =>{
    button.addEventListener('click',()=>{
        const faq = button.nextElementSibling;
        const icon = button.children[1];

        faq.classList.toggle('show');
        icon.classList.toggle('rotate');
    })
});