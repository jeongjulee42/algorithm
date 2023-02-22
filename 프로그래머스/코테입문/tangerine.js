function solution(k, tangerine) {
    let res = 0;
    
    let obj = {};
    for(let i = 0; i < tangerine.length; i++){
        if(tangerine[i] in obj){
            obj[tangerine[i]] ++;
        }
        else{
            obj[tangerine[i]] = 1;
        }
    }
    
    let ary = Object.values(obj).sort((a,b) => b-a)

    let sum = 0;
    for(let i = 0; i < ary.length; i++){
        sum += ary[i];
        res++;
        if(sum >= k){
            break;
        }
    }
    
    return res;
}