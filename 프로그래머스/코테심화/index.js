function solution(my_string, num1, num2) {
    let answer = [...my_string];
    const i = answer[num1]
    answer.splice(num1,1,answer[num2]);
    answer.splice(num2,1,i);
    return answer.join('');
}