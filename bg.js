const body = document.querySelector("body");

const IMG_NUMBER = 8;

function handleImgLoad(){
    console.log("finished loadend")
}


function paintImage(imgNumber){
    const image = new Image();
    image.src=`Images/${imgNumber + 1}.jpg`;
    image.classList.add("bgImage")
    body.appendChild(image);
}
function genRandom(){
    const number = Math.floor(Math.random()*IMG_NUMBER);
    return number;
}

function init(){
        const randomNumber = genRandom();
        paintImage(randomNumber)

}

init();