const app = {

    init : () => {
        console.log('init');
        app.drawBoard(60);
    },
 
    drawBoard : (sizeOfBoard) => {

        const board = document.getElementById('board');

        for (let rowIndex = 0; rowIndex < sizeOfBoard ; rowIndex++) {
            
            const row = document.createElement('div');
            row.classList.add('row');
            board.appendChild(row);

            for (let cellIndex = 0; cellIndex < sizeOfBoard; cellIndex++) {

                const cell = document.createElement('div');
                cell.classList.add('cell');
                row.appendChild(cell);

                cell.style.width = `500 / ${sizeOfBoard}px`;
                cell.style.height = `500 / ${sizeOfBoard}px`;

                cell.addEventListener('mouseover', function() { 
                    cell.classList.add('black');
                });

            }


        }
    }
};

document.addEventListener('DOMContentLoaded', app.init);