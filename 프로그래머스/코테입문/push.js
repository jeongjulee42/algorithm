function solution(A, B) {
    let a = A;
    let num = 0;
    for(let i = 0; i<A.length; i++){
        if(a === B){
            return num;
        }
        a = fnc(a);
        num ++;
    }
    return -1;
}

const fnc = (str) => {
    let ary = [...str];
    const a = ary.pop();
    ary.unshift(a);
    return ary.join('');
}