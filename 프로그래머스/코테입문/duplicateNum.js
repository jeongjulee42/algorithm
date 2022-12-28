function solution(my_string) {
    const ss = new Set([...my_string]);
    return [...ss].join('')
}