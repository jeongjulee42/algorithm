function solution(phone_number) {
    let last = [...phone_number];
    last = last.map((item, index, ary) => index < ary.length -4 ? '*' : item)
    return last.join('')
}