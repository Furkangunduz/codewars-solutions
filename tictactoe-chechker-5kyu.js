function isSolved(board) {
	var winConditions =[
	  [0,1,2],
	  [3,4,5],
	  [6,7,8],
	  [0,3,6],
	  [2,5,8],
	  [0,4,8],
	  [2,4,6]];
	
	var arr1d = [].concat(...board);
	
	for(let i = 0; i<winConditions.length; i++){
  
	  var first  = arr1d[winConditions[i][0]];
	  var second = arr1d[winConditions[i][1]];
	  var third  = arr1d[winConditions[i][2]];
	  
  
  
	  if(!(first==0 || second==0 || third == 0) && ((first==1)&&(second==1)&&(third==1))){
		console.log(first+""+second+""+third)
		return 1;
	  }
	  if(!(first==0 || second==0 || third == 0) &&  ((first==2)&&(second==2)&&(third==2))){
		return 2;
	  }
  
	}
	for(let i = 0; i<arr1d.length;i++){
	  
	  if(arr1d[i]==0)
		return -1;
	  }
	return 0;
	}

var board =[[2,2,2],
			[0,2,0],
			[2,1,0]]

isSolved(board);