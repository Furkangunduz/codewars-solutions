function findOutlier(integers){
    const even = [];
    const odd  = [];
    for(let i = 0; i< integers.length; i++){
        if(integers[i]%2==1 || integers[i]%2 == -1){
            even.push(integers[i]);
        }else{
            odd.push(integers[i]);
        }
    }
    console.log(even)
    console.log(odd)

    if(even.length > odd.length){
        return odd[0];
    }else{
        return even[0];
    }
     
  }
  function findOutlier2(int){
    var even = int.filter(a=>a%2==0);
    var odd = int.filter(a=>a%2!==0);
    return even.length==1? even[0] : odd[0];
  }


  console.log(findOutlier([0,1,2]));