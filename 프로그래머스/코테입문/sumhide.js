function solution(my_string) {
    const ary = [...my_string].map(item => parseInt(item));
    const ary1 = ary.filter(item => Number.isInteger(item));
    return ary1.reduce((sum, val) => (sum += val), 0)
    
}