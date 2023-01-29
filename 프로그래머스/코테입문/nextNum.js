function solution(n) {
    let num = [...n.toString(2)].filter(item => item === '1').length;
    let i = n + 1;
    while([...i.toString(2)].filter(item => item === '1').length !== num){
        i++;
    }
    return i;
}