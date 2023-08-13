function solution(box, n) {
    const ary = box.map(item => Math.floor(item/n));
    return ary[0] * ary[1] * ary[2];
}