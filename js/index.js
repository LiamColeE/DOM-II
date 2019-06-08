// Your code goes here

// 
// Rotate Page OnScroll
// 
let body = document.querySelector("body");
let rotation = 0;

document.addEventListener("scroll", function(e) {
    console.log("rotate");
    rotation += 1;
    if(rotation == 360){
        rotation = 0;
    }
    body.style.transform = `rotate(${rotation}deg)`;
})

