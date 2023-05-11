function solution(my_string) {
    const ary = [...my_string].filter(item => !(['a','e','i','o','u'].includes(item)));
    return ary.join('');
}