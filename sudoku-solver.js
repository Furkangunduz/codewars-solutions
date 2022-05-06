function sudoku(board) {
    function possible(x,y,n){
        for(let i = 0; i<9; i++){
            if (board[y][i] == n){return false;} 
            if (board[i][x] == n){return false;}  
        }
        let x0 = Math.floor(x/3)*3;
        let y0 = Math.floor(y/3)*3;
    
        for(let i = 0; i<3; i++){
            for(let j = 0; j<3; j++){
                if(board[y0+i][x0+j] === n) return false;
            }
        }
        return true;    
    }

    function emptySpot(board){
        for(let i = 0; i<9; i++){
            for(let j = 0; j<9; j++){
                if (board[i][j] ===  0) return [i,j]
            }
        }
        return [-1,-1]
    }

    function solve(board){
        let emptycords  = emptySpot(board);
        let x = emptycords[1]
        let y = emptycords[0]
        
        if(y === -1) return board
        
        for(let k = 1; k<10; k++){
            if(possible(x,y,k)){
                board[y][x] = k;
                solve(board);
            }
        }
        if(emptySpot(board)[0] !== -1) board[y][x] = 0;

        return board
    }
    console.log(solve(board))

}




var puzzle = [[5,3,0,0,7,0,0,0,0],
             [6,0,0,1,9,5,0,0,0],
             [0,9,8,0,0,0,0,6,0],
             [8,0,0,0,6,0,0,0,3],
             [4,0,0,8,0,3,0,0,1],
             [7,0,0,0,2,0,0,0,6],
             [0,6,0,0,0,0,2,8,0],
             [0,0,0,4,1,9,0,0,5],
             [0,0,0,0,8,0,0,7,9]];


sudoku(puzzle)