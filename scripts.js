let size;
const container = document.getElementById('container');
const reset = document.querySelector('#reset');
let color;

function grid(size = 16) {
    for (i = 0; i < size; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        row.id = 'row' + (i + 1);

        for (j = 0; j < size; j++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.id = row.id + 'square' + (j + 1);
            row.appendChild(square);
        }

        container.appendChild(row);
    }
};

function randomColor() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    return color = 'rgb(' + red + ', ' + blue + ', ' + green + ')';
}

function darken(target) {
    let brightness = target.getAttribute('title');
    target.style.filter = `brightness(${brightness * 10}%)`;
    if (brightness > 0) {
        brightness -= 1;
    }
    target.setAttribute('title', brightness);
}

function colorChange(color = 'blue') {
    const hover = container.addEventListener('mouseover', function(e){
        if(!e.target.classList.contains('filled')) {
            e.target.style.background = randomColor();
            e.target.classList.add('filled');
            e.target.setAttribute('title', '9');
        }
        else {
            let target = e.target;
            darken(target);
        }
        console.log(e);
    })
};

function resetGrid(e) {
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
}

reset.addEventListener('click', function(e) {
    resetGrid();
    size = prompt('What size would you like your grid?');
    grid(size);
})

grid();
colorChange();