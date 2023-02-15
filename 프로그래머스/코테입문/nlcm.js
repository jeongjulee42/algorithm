function solution(arr) {
    let res = 1;
    for(let i = 0; i < arr.length; i++){
        res = lcm(res, arr[i]);
    }
    return res;
}

function gcd(a, b){
    if(b === 0){
        return a;
    }
    return gcd(b, a%b);
}

function lcm(a,b){
    return (a * b) / gcd(a,b);
}