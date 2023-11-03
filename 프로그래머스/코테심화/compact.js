function solution(arr) {
    return arr.reduce((sum ,val) => (sum += val), 0)/arr.length;
}