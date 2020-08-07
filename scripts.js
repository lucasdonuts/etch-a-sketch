let size;
const container = document.getElementById('container');

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


grid(32);