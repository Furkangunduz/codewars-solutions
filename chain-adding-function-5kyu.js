function add(n){
    //console.log("n " + n)
    const fx = function(y){
        //console.log("y " + y)
        return add(n+y);
    
    }

    fx.valueOf = () => n; 

    return fx;

}



console.log(add(5)(7)(8)(2));

