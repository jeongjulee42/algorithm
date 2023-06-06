function solution(numbers, k) {
    let num = (k*2 - 1) % numbers.length - 1;
    return numbers[num]
}