function solution(array) {
    const ary = array.map(item => item.toString());
    const str = ary.join('');
    return [...str].filter(item=> item === '7').length
}