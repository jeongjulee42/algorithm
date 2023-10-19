function solution(left, right) {
    let res = 0;
    for(let i = left; i <= right; i++){
        let num = 0;
        for(let j = 1; j <= i; j++){
            if(i % j === 0){
                num ++
            }
        }
        if(num % 2 === 0){
            res += i;
        }
        else{
            res -= i;
        }
    }
    return res;
}