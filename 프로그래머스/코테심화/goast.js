function solution(numbers) {
    const ary = [0,1,2,3,4,5,6,7,8,9];
    const res = ary.filter(item => !numbers.includes(item))
    return res.reduce((sum, val) => (sum += val), 0)
}
