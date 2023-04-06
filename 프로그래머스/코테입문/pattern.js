function solution(n) {
    let ary = new Array(n).fill('수');
    ary = ary.map((item, index) => index%2 === 0 ? item : '박');
    return ary.join('')
}