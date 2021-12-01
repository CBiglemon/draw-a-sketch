const app = {

    init : () => {
        console.log('init');
        app.drawBoard(10);
        
        const clearButton = document.getElementById('clear');
        clearButton.addEventListener('click', function(){
            app.drawBoard(10);
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