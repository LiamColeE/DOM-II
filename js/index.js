// Your code goes here

//
//Track mouse at all times
//
let mouseX = 0;
let mouseY = 0;
document.addEventListener("mousemove", function(e){
    mouseX = e.clientX;
    mouseY = e.clientY;
    drag();
})

// 
// Rotate Page OnScroll
// 
let body = document.querySelector("body");
let rotation = 0;
let ticking = false;

document.addEventListener("scroll", function (e) {
    console.log("rotate");
    if (!ticking) {
        rotation += 1;
        if (rotation == 360) {
            rotation = 0;
        }
        body.style.transform = `rotate(${rotation}deg)`;
        ticking = false;
    }

    ticking = true;
})

let headerImg = document.querySelector(".container .intro img");
let clicked = false;

headerImg.addEventListener('mousedown', event => {
    headerImg.style.position = "absolute";
    clicked = true;
    console.log(event);
  });


headerImg.addEventListener('mouseup', event => {
    clicked = false;
});

function drag(){
    if(clicked){
        headerImg.style.left = `${mouseX}px`
        headerImg.style.top = `${mouseY}px`
    }
}
