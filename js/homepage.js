// var pxChange = 0;
// var initPx = 20;
// var h2 = document.querySelector("h2");
// var newPx

// setInterval(function() {
//     newPx = initPx + pxChange;
//     h2.style.fontSize = `${newPx}px`;
//     pxChange = pxChange + 0.1;
//     pxChange = pxChange % 30;
// }, 30)

var greeting = document.querySelector(".greeting")
var r,g,b
r = 100
g = 70
b = 255
var up = true

// Changing the color of the greating
setInterval(function() {
    greeting.style.color = `rgb(${r}, ${g}, ${b})`
    if ((g + 4 <= 255) && up) {
        g = g + 4
    } else if ((g + 4 >= 255) && up) {
        up = false
        g = g - 4
    } else if (g - 4 >= 0 && !up) {
        g = g - 4
    } else if (g - 4 <= 0 && !up) {
        up = true
        g = g + 4
    }
}, 50)

// // Disable view for mobile phones.
// function reportWindowSize() {
//     const pageContent = document.querySelector(".page-content")
//     const message = document.querySelector("#message")
//     if(window.innerWidth <= 600){ 
//         pageContent.style.visibility = "hidden"
//         message.style.visibility = "visible"
//         message.style.left = 0
//         message.innerHTML = "Please open the webpage from your computer."
        
//     } else {
//         message.style.visibility = "hidden"
//         message.innerHTML = ""
//         pageContent.style.visibility = "visible"
//     }
// }

// window.onresize = reportWindowSize;
// window.onload = reportWindowSize;

//slide tech stack categories from the left side of the screen
var categories = document.querySelector(".categories");
var category = document.querySelectorAll(".category");

var observer = new IntersectionObserver(function(entries) {
    //the screen displays the tech-stack element
	if(entries[0].isIntersecting === true) { 
        console.log('Element has just become visible in screen');
        category.forEach(item => {
            item.style.left = '0px';
        });
        
    }

    //the screen doesn't display the tech-stack element
    if(entries[0].isIntersecting === false) { 
        console.log('out');
        category.forEach(item => {
            item.style.left = '-2000px';
        });

    }
        
}, { threshold: [0] });

observer.observe(categories);