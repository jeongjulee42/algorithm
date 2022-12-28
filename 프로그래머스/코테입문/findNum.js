function solution(num, k) {
    const str = num.toString();
    const ary = [...str];
    return ary.includes(k.toString()) ?  ary.indexOf(k.toString()) + 1 : -1
}