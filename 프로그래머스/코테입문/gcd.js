function solution(n, m) {
    return [gcd(n,m), n * m / gcd(n,m)]
}

function gcd(a,b){
    return b === 0 ? a : gcd(b, a % b)
}