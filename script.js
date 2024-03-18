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

// // gsap

// let timeline = gsap.timeline();

// Array.from(parallax_element).filter(el => !el.classList.contains("text")).forEach((el) => {
//     timeline.from(el,{
//         top: `${el.offsetHeight / 2 + +el.dataset.distance}px`,
//         duration: 3.5,
//     },
//     );
// });