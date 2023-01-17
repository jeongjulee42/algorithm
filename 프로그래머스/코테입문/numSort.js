function solution(n) {
    let ary = [...String(n)];
    return parseInt(ary.sort((a,b) => b-a).join(''))
}