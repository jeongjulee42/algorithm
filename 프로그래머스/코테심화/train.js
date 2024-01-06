function solution(n) {
    let fac = 1;
    let res = 0;
    while(fac <= n){
        res ++;
        fac = fac * res;
    }
    return res - 1;
}