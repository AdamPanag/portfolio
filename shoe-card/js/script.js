const container = document.querySelector(".container")
const card = document.querySelector(".card")
const sneaker = document.querySelector(".sneaker .image")
const title = document.querySelector(".title")
const h3 = document.querySelector("h3")
const sizes = document.querySelector(".sizes")
const purchase = document.querySelector(".purchase button")



//Moving mouse
container.addEventListener("mousemove", (e) => {
    let xAxis = ( e.pageX - window.innerWidth / 2) / 10;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 10;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//Mouse in
container.addEventListener("mouseenter", (e) => {
    card.style.transition = "none";
    sneaker.style.transform = "translateZ(50px) rotateZ(-45deg)";
    title.style.transform = "translateZ(50px)";
    h3.style.transform = "translateZ(50px)";
    sizes.style.transform = "translateZ(50px)";
    purchase.style.transform = "translateZ(50px) scale(1.3)";

});

//Mouse out
container.addEventListener("mouseleave", (e) => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
    title.style.transform = "translateZ(0px)";
    h3.style.transform = "translateZ(0px)";
    sizes.style.transform = "translateZ(0px)";
    purchase.style.transform = "translateZ(0px)";
});