function validSolution(board){
 
  for(let i = 0; i<9; i++){
    let setColumn = new Set(board[i])//column turn into set 
    let setRow = new Set();
   
    for(let j = 0; j<9; j++){
      setRow.add(board[j][i]);  //get row item from all columns and push to set
    }
    if(setColumn.has(0) || setColumn.size != 9) return false 
    if(setRow.has(0) || setRow.size != 9) return false 
  }
  
  
  var x = 0;
  var y = 0;
  var countx = 0;
  var county = 0;
  A : while(true){
    var a = new Set();

    for(let i = 0; i < 3 ; i++){
      for(let j = 0; j < 3 ; j++){
        a.add(board[y+i][x+j])
      }
    }

    if(a.has(0) || a.size != 9) return false 

    countx++;
    x=(3*countx);

    if(countx==3) {
      countx = 0;
      x = 0;
      county++;
      y = (3*county);
      if(county == 3){
        return true
      }
    };
}
}


var board = [ [5, 3, 4, 6, 7, 8, 9, 1, 2], 
              [6, 7, 2, 1, 9, 5, 3, 4, 8],
              [1, 9, 8, 3, 4, 2, 5, 6, 7],
              [8, 5, 9, 7, 6, 1, 4, 2, 3],
              [4, 2, 6, 8, 5, 3, 7, 9, 1],
              [7, 1, 3, 9, 2, 4, 8, 5, 6],
              [9, 6, 1, 5, 3, 7, 2, 8, 4],
              [2, 8, 7, 4, 1, 9, 6, 3, 5],
              [3, 4, 5, 2, 8, 6, 1, 7, 9]]



validSolution(board);