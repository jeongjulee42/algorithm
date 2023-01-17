function solution(a, b) {
    let max = Math.max(a,b)
    let min = Math.min(a,b)
    let res = 0;
    for(let i = min; i<=max; i++){
        res += i;
    }
    return res;
}