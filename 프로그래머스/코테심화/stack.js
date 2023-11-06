function solution(s){
    let ary = [...s];
    let z= 0;
    if(ary[0] === '('){
        z++;
        for(let i = 1; i < ary.length; i++){
            if(ary[i] === '('){
                z++;
            }
            else{
                z --;
            }
            if(z < 0){
                return false;
            }
        }   
    }
    else {
        return false;
    }

    if(z === 0){
        return true;
    }
    else{
        return false;
    }
}