function solution(numbers) {
    return numbers.reduce((sum, val) => (sum += val/numbers.length), 0);
}