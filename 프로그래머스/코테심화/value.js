function solution(s) {
    let ary = s.split(' ')
    ary = ary.map(item => parseInt(item))
    ary.sort((a,b) => a - b);
    return ary[0] + " " + ary[ary.length - 1];
}