function solution(n) {
    const gcd = (a,b) => a%b === 0 ? b : gcd(b, a%b);
    const lcm = (a,b) => a * b / gcd(a,b);
    
    const maxnum = Math.max(n,6);
    const minnum = Math.min(n,6);
    return lcm(maxnum, minnum) / 6;
}
