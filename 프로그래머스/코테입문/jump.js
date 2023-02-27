function solution(n) {
    let res = 0;
    for(let i = 0; i <= n; i+=2){
        let num = n - i + (i/2)
        res += comb(num, i/2);
    }
    return res % 1234567;
}

function comb(a,b){
    return fac(a,b) / fac(b,b)
}
function fac(a,b){
    let num = 1;
    for(let i = 0; i < b; i++){
        num *= a-i
    }
    return num
}