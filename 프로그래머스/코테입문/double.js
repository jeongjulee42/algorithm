function solution(numbers) {
    const res = numbers.sort((a,b) => a - b);
    return res[numbers.length-1] * res[numbers.length-2];
}