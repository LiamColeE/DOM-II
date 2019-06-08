// Your code goes here

//
//Track mouse at all times
//
let mouseX = 0;
let mouseY = 0;

document.addEventListener("mousemove", function (e) {
    if(clicked == true){
        e.preventDefault();
    }
    mouseX = e.clientX;
    mouseY = e.clientY;
    drag();
})

// 
// Rotate Page OnScroll
// 
let body = document.querySelector("body");
let rotation = 0;

document.addEventListener("scroll", function (e) {
    console.log("rotate");
    rotation += 1;
    if (rotation == 360) {
        rotation = 0;
    }
    body.style.transform = `rotate(${rotation}deg)`;

})


//
// Make Header img dragable
// 
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

function drag() {
    if (clicked) {
        headerImg.style.left = `${mouseX-500}px`
        headerImg.style.top = `${mouseY-150}px`
    }
}

// 
// Create ability to "delete" and "restore" all elements on page by typing delete
// or restore
// 
let everyElement = Array.from(document.querySelectorAll("*"));
let currentInputString = "";

document.addEventListener("keypress", function(e){
    if(currentInputString.length < "restore".length){
        currentInputString += e.key;
    }
    else if(currentInputString.length === "restore".length){
        currentInputString = currentInputString.substr(1) + e.key;
    }

    if(currentInputString.toLocaleLowerCase().includes("delete")){
        everyElement.forEach(element => {
            element.style.visibility = "hidden";
        });
    }
    else if(currentInputString.toLocaleLowerCase().includes("restore")){
        everyElement.forEach(element => {
            element.style.visibility = "visible";
        });
    }
    console.log(currentInputString);
});