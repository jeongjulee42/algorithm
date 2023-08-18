function solution(n) {
    let i = 2;
    let a = false;
    const res = [];
    while(i <= n){
        if(n % i === 0){
            n = n / i;
            a = true;
            if(res[res.length - 1] !== i){
                res.push(i);
            }
        }
        else{
            i++;
        }

    }
    return res;
}