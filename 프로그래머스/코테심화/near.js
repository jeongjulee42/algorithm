function solution(array, n) {
    const ary = Array.from(array).map(item => Math.abs(item - n));
    const indexnum = Math.min(...ary);
    const ary2 = array.filter(item => Math.abs(item - n)===indexnum);
    return Math.min(...ary2)
}