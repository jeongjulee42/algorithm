function solution(my_string) {
    const ary = [...my_string];
    const newary = ary.map(item => Number.isInteger(parseInt(item)) ? item : ',').join('').split(',').map(item => item ==='' ? 0 : parseInt(item));
    return newary.reduce((sum, val) => (sum += val), 0)
}