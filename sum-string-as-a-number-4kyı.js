function sumStrings(a,b) {
    if(a && b){
      let sum =BigInt(a)+BigInt(b);
      return ""+sum;
    }
    if(a){
      return a;
    }else{
      return b;
    }
}
sumStrings("123","123");