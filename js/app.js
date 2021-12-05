const app = {

    init : () => {
        console.log('init');

        let valueBoard = 50;

        app.drawBoard(valueBoard);
        
        const clearButton = document.getElementById('clear');
        clearButton.addEventListener('click', function(){
            app.drawBoard(valueBoard);

            
            
        });
        document.getElementById('gridSize').addEventListener('input', function () {

            valueBoard = document.getElementById('gridSize').value;
            app.drawBoard(valueBoard);
            return valueBoard;
        });
    },
 
    

    drawBoard : (sizeOfBoard) => {

        const board = document.getElementById('board');
        board.innerHTML='';

        for (let rowIndex = 0; rowIndex < sizeOfBoard ; rowIndex++) {
            
            const row = document.createElement('div');
            row.classList.add('row');
            board.appendChild(row);
            for (let cellIndex = 0; cellIndex < sizeOfBoard; cellIndex++) {
                
                const cell = document.createElement('div');
                cell.classList.add('cell');
                row.appendChild(cell);
               
                const calcul = 500 / sizeOfBoard;

                cell.style.width = `${calcul}px`;
                cell.style.height = `${calcul}px`;

                cell.addEventListener('mouseover', function() { 
                    cell.classList.add('black');
                });

            }
        }
    },

};

document.addEventListener('DOMContentLoaded', app.init);