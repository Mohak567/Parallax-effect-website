const parallax_el = document.querySelectorAll(".parallax");

let xValue = 0 , yValue = 0;

let rotateDegree = 0;

function update(cursorPosition){
    parallax_el.forEach((el) =>{
        let speedX = el.dataset.speedx;
        let speedY = el.dataset.speedy;
        let speedZ = el.dataset.speedz;
        let rotateSpeed = el.dataset.speedrota;

        let isInLeft = parseFloat(getComputedStyle(el).left) < window.innerWidth / 2 ? 1 : -1;
        let zValue = (cursorPosition - parseFloat(getComputedStyle(el).left)) * isInLeft * 0.1;


        el.style.transform = `perspective(2300px) translateZ(${zValue * speedZ}px) rotateY(${rotateDegree * rotateSpeed}deg) translateX(calc(-50% + ${-xValue * speedX}px)) translateY(calc(-50% + ${yValue * speedY}px)) `;
    });
}

update(0);

window.addEventListener("mousemove",(e) =>{
    xValue = e.clientX - window.innerWidth / 2;
    yValue = e.clientY - window.innerHeight / 2;

    rotateDegree = (xValue / (window.innerWidth / 2)) *  20;
    update(e.clientX);
});

//gsap

// let timeline = gsap.timeline();

// parallax_el.forEach(el =>{
//     timeline.from(el , 
//         {
//             top: `${el.offsetHeight / 2 + el.dataset.distance}px`,
//             duration: 1,
//         },);
// });

//gsap

// let timeline = gsap.timeline();

// parallax_el.forEach(el =>{
    
// })

gsap.from(".bg-img",{
    top: `${document.querySelector(".bg-img").offsetHeight / 2 - 200}px`,
    duration: 3.5,
    ease: "power3.out",
});

gsap.from(".fog-7",{
    top: `${document.querySelector(".fog-7").offsetHeight / 2 + 850}px`,
    duration: 3.5,
    ease: "power3.out",
})

gsap.from(".mountain-10",{
    top: `${document.querySelector(".mountain-10").offsetHeight / 2 + 1100}px`,
    duration: 3.5,
    ease: "power3.out",
})

gsap.from(".fog-6",{
    top: `${document.querySelector(".fog-6").offsetHeight / 2 + 1400}px`,
    duration: 3.5,
    ease: "power3.out",
})

gsap.from(".mountain-9",{
    top: `${document.querySelector(".mountain-9").offsetHeight / 2 + 1700}px`,
    duration: 3.5,
    ease: "power3.out",
})

gsap.from(".mountain-8",{
    top: `${document.querySelector(".mountain-8").offsetHeight / 2 + 1800}px`,
    duration: 3.5,
    ease: "power3.out",
})

gsap.from(".fog-5",{
    top: `${document.querySelector(".fog-5").offsetHeight / 2 + 1900}px`,
    duration: 3.5,
    ease: "power3.out",
})

gsap.from(".mountain-7",{
    top: `${document.querySelector(".mountain-7").offsetHeight / 2 + 2000}px`,
    duration: 3.5,
    ease: "power3.out",
})

gsap.from(".mountain-6",{
    top: `${document.querySelector(".mountain-6").offsetHeight / 2 + 2300}px`,
    duration: 3.5,
    ease: "power3.out",
})

gsap.from(".fog-4",{
    top: `${document.querySelector(".fog-4").offsetHeight / 2 + 2400}px`,
    duration: 3.5,
    ease: "power3.out",
})

gsap.from(".mountain-5",{
    top: `${document.querySelector(".mountain-5").offsetHeight / 2 + 2550}px`,
    duration: 3.5,
    ease: "power3.out",
})

gsap.from(".fog-3",{
    top: `${document.querySelector(".fog-3").offsetHeight / 2 + 2800}px`,
    duration: 3.5,
    ease: "power3.out",
})

gsap.from(".mountain-4",{
    top: `${document.querySelector(".mountain-4").offsetHeight / 2 + 3200}px`,
    duration: 3.5,
    ease: "power3.out",
})

gsap.from(".mountain-3",{
    top: `${document.querySelector(".mountain-3").offsetHeight / 2 + 3400}px`,
    duration: 3.5,
    ease: "power3.out",
})


gsap.from(".fog-2",{
    top: `${document.querySelector(".fog-2").offsetHeight / 2 + 3600}px`,
    duration: 3.5,
    ease: "power3.out",
})

gsap.from(".mountain-2",{
    top: `${document.querySelector(".mountain-2").offsetHeight / 2 + 3800}px`,
    duration: 3.5,
    ease: "power3.out",
})

gsap.from(".mountain-1",{
    top: `${document.querySelector(".mountain-1").offsetHeight / 2 + 4000}px`,
    duration: 3.5,
    ease: "power3.out",
})

gsap.from(".fog-1",{
    top: `${document.querySelector(".fog-1").offsetHeight / 2 + 4200}px`,
    duration: 3.5,
    ease: "power3.out",
})


gsap.from(".text h1",{
    y: window.innerHeight - document.querySelector(".text h1").getBoundingClientRect().top + 500,
    duration: 2,
},1.5);

gsap.from(".text h2",{
    y: -150,
    opacity: 0,
    duration: 1.5,
},3)

gsap.from(".hide",{
    opacity: 0,
    duration: 1.5,
},3)