function solution(my_string, letter) {
    return [...my_string].filter(item => item !== letter).join('');
}