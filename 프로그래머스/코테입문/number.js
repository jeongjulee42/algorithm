function solution(n) {
    let res = 0;
    for(let i = 1; i<=n; i++){
        let sum = 0;
        for(let j = i; sum <= n; j++){
            sum += j;
            if(sum === n){
                res ++;
            }
        }
    }

    return res;
}