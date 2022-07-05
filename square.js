const container = document.querySelector('.boxes');
container.classList.add('container');

let userChoice = 64;

function randomColor(){
    let rand = Math.floor(Math.random()*5);
    console.log(rand);
    const color = {
        0: "red",
        1: "green",
        2: "blue",
        3: "orange",
        4: "purple",
    };
    return color[rand];
}

for(let i =0; i<userChoice; i++){
    const box = document.createElement('div');
    box.classList.add('box');
    container.appendChild(box);
}

function changeColor(e){
    this.style.backgroundColor = randomColor();
}



const boxes = document.querySelectorAll('.box');
boxes.forEach(box => box.addEventListener('mouseenter', changeColor));