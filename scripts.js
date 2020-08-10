let size;
const container = document.getElementById('container');
const reset = document.querySelector('#reset');

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

function colorChange(color = 'blue') {
    const hover = container.addEventListener('mouseover', function(e){
        e.target.style.background = color;
        console.log(e);
    })
}

reset.addEventListener('click', function(e) {
    size = prompt('What size would you like your grid?');
    grid(size);
})

grid();
colorChange();