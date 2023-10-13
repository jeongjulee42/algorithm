function solution(hp) {
    const big = Math.floor(hp / 5);
    const middle = Math.floor((hp - (5*big) ) / 3);
    const small = (hp - (5*big) - (3*middle));
    return big+middle+small
}