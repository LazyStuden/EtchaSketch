const container = document.querySelector('.boxes');
container.classList.add('container');


function generateGrid(divNum = 20 * 20, className = 'grid-20x20'){
    container.classList.remove('grid-10x10', 'grid-20x20', 'grid-30x30');
    container.classList.add(className);
    container.innerHTML = '';
    for(let i=0; i< divNum; i++){

        const box = document.createElement('div');
        box.classList.add('box');
        container.appendChild(box);
    }
    generateEvent();
}

function checkButtons(){
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => button.addEventListener('click', () =>{
        if(button.classList.contains('grid10')){
            generateGrid(10*10, 'grid-10x10');
        }
        else if(button.classList.contains('grid20')){
            generateGrid(20*20, 'grid-20x20');
        }
        else if(button.classList.contains('grid30')){
            generateGrid(30*30, 'grid-30x30');
        }
    }))
}

function randomColor(){
    let rand = Math.floor(Math.random()*5);

    const color = {
        0: "#03045e",
        1: "#0077b6",
        2: "#00b4d8",
        3: "#90e0ef",
        4: "#caf0f8",
    };
    return color[rand];
}


function changeColor(e){
    this.style.backgroundColor = randomColor();
}


function generateEvent(){
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => box.addEventListener('mouseenter', changeColor));
}

generateGrid();
checkButtons();
generateEvent();