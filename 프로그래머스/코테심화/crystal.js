function solution(balls, share) {
    return fac(balls) / ((fac(balls - share) * fac(share)))
}

function fac(num){
    let res = BigInt(1);
    for(let i = BigInt(2); i<= BigInt(num); i++){
        res *= i
    }
    return res;
}