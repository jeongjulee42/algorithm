function solution(n) {
    let num = n.toString(3)
    let ary = [...num].map(item => parseInt(item));
    let a = 1;
    for(let i = 0; i < ary.length; i++){
        ary[i] = a * ary[i];
        a = a * 3;
    }
    return ary.reduce((sum, val) => (sum += val), 0)
}