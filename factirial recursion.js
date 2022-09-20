function fact(num){

    if (num==0){
        return 1
    }else{
        return num*fact(num-1);
    }
    }
    

let rape = fact(4)
console.log(rape)