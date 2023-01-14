function solution(a, b) {
    let gc = gcd(a, b);
    let m = b / gc;
    while( m % 2 === 0){
        m /= 2;
    }
    while( m % 5 === 0){
        m /= 5;
    }
    if(m === 1){
        return 1;
    }
    return 2;
}

function gcd(a,b){
    return b === 0 ? a : gcd(b, a%b);
}