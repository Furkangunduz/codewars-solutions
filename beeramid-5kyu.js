        
        
var beeramid = function(bonus, price) {
    if(bonus<=0 || price > bonus) return 0;
    var count = 1;
    var cost = 0;
    while(true){
        cost += (count**2)*price;
          
        if(cost==bonus) return count;
        if(cost>bonus) return count-1;
        
        
        count++; 
        
       
    }
  }