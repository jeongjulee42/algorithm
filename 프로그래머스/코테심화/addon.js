function solution(absolutes, signs) {
    const ary = signs.map((item, index) => item ? absolutes[index] : -absolutes[index]);
    return ary.reduce((sum, val ) => (sum += val), 0)
}