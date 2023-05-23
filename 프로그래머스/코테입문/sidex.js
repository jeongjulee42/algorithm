function solution(x, n) {
    const ary = new Array(n).fill(x);
    return ary.map((item, index) => (index+1)*x)
}