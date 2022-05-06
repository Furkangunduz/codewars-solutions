var Vector = function (components) {
    this.components  = components;
    
    this.add = function(x){
      if(this.components.length != x.length) throw 'lengths are diffirent!';
      else{
          for(let i = 0; i<components.length; i++){
              this.components[i] += x[i];
          }
          return this.components;
      }
    }

    this.substract = function(x){
        if(this.components.length != x.length) throw 'lengths are diffirent!';
        else{
            for(let i = 0; i<components.length; i++){
                this.components[i] -= x[i];
            }
            return this.components;
        }
    }

    this.dot = function(x){
        if(this.components.length != x.length) throw 'lengths are diffirent!';
        else{
            let sum = 0;
            for(let i = 0; i<components.length; i++){
                this.components[i] *= x[i];
                sum += this.components[i];
            }
            return sum;
        }
    }
    this.norm = function(){
        let sum = 0;
        for(let i = 0; i<components.length; i++){
            this.components[i] *= this.components[i];
            sum += this.components[i];
        }
        return Math.sqrt(sum);
    
    }
  }


  const a = new Vector([1,2,3]);

  console.log(a.dot([1,2,3]));