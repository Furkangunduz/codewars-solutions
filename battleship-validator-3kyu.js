function validateBattlefield(field) {
    var count = 0;


    //check are there 20 block 
    for(let i = 0; i<10; i++){
        for(let j = 0; j<10; j++){
            if(field[i][j]==1) count++;
        }   
    }
    if(count != 20) return false;
 
    var oneTileShipAmount   = 4;
    var twoTileShipAmount   = 3;
    var threeTileShipAmount = 2;
    var fourTileShipAmount  = 1;

    for(let i = 0; i<10; i++){
        for(let j = 0; j<10; j++){

            if(field[i][j]==2){
                let x = j;
                let y = i;

                if(field[++y][++x] != 0) return false;
                x-=2;
                if(field[y][x<1? 1: x] != 0) return false;
            
            }

            if(field[i][j]==1){
                
                let x = j;
                let y = i;
                
                //check bottomleft and bottomright corners and right 
                if(field[++y][++x] != 0)return false
                x-=2;
                if(field[y][x<1?1:x] != 0)return false
                


                x = j;
                y = i;
                A:while(true){

                    // check right 0 and then bottom 0 
                    //if it is true you have single block ship

                    if (field[y][++x] == 0){
                        x--;
                        if (field[++y][x] == 0) {
                            oneTileShipAmount--;
                            y--;

                            field[i][j] = 2;
                            break A;
                        }
                    }
                    
                    // reset the coordinates 
                    // after every control you should reset the coordinates
                    x=j;
                    y=i;



                    // check is bottom  0 and then is right 0
                    //if it is true you have single block ship
                    if (field[++y][x] == 0){
                        y--;
                        if (field[y][++x] == 0) {
                            x--;
                            
                            oneTileShipAmount--;
                            field[x][y] = 2;
                            break A;
                        }
                    }
                    
                    
                    // reset the coordinates 
                    x=j;
                    y=i;
                    
                    
                    

                    //go bottom to find lenght of ship
                    if(field[++y][x] == 1){
                        //check right to is there any ship in contact

                        field[i][j] = 2;
                        field[y][x] = 2;
                        
                        let count = 2;
                        while(field[++y][x] != 0){
                            field[y][x] = 2;
                            count++;
                        }
                        switch(count){
                            case 2: 
                                twoTileShipAmount--;
                                break;
                            case 3: 
                                threeTileShipAmount--;
                                break;
                            case 4: 
                                fourTileShipAmount--;
                            break;
                        }
                        
                    }
                    x=j;
                    y=i;

                    //go right to find lenght of ship
                    if(field[y][++x] == 1){
                        
                        //check bottom to is there any ship in contact
                        field[i][j] = 2;
                        field[y][x] = 2;

                        let count = 2;
                        while(field[y][++x] != 0){
                            field[y][x] = 2;
                            count++;
                        }
                        switch(count){
                            case 2: 
                                twoTileShipAmount--;
                                break;
                            case 3: 
                                threeTileShipAmount--;
                                break;
                            case 4: 
                                fourTileShipAmount--;
                            break;
                        }
                    }

                    break A;
                }
            }
        }   
    }
    //check how many ship remain
    //if all amoun are 0 its valid board
    if(oneTileShipAmount != 0) return false
    if(twoTileShipAmount != 0) return false 
    if(threeTileShipAmount != 0) return false
    if(fourTileShipAmount != 0) return false


    return true;
}




var board =[[ 1, 0, 0, 0, 0, 1, 1, 0, 0, 0 ],
            [ 1, 0, 1, 0, 0, 0, 0, 0, 1, 0 ],
            [ 1, 0, 1, 0, 1, 1, 1, 0, 1, 0 ],
            [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
            [ 0, 0, 0, 0, 0, 0, 0, 0, 1, 0 ],
            [ 0, 0, 0, 0, 1, 1, 1, 0, 0, 0 ],
            [ 0, 0, 0, 0, 0, 0, 0, 0, 1, 0 ],
            [ 0, 0, 0, 1, 0, 0, 0, 0, 0, 0 ],
            [ 0, 0, 0, 0, 0, 0, 0, 1, 0, 0 ],
            [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ]

console.log(validateBattlefield(board));



