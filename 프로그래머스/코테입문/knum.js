function solution(i, j, k) {
    let str = '';
    for(let m = i; m<=j; m++){
        str += m.toString();
    }
    return [...str].filter(item => item===k.toString()).length;
}