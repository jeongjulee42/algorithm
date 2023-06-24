function solution(a, b, n) {
    let res = 0;
    let rest = n;
    
    while(rest >= a){
        let x = Math.floor(rest / a);
        res += x*b;
        rest = rest - (x*a) + x*b;
    }
    return res;
}