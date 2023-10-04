function solution(s) {
    let res = '';
    const result = [];
    const ary = [...s];
    for(item of ary){
        let array = ary.filter(i => i === item);
        if(array.length === 1){
            result.push(item);
        }
    }
    res = result.sort().join('')
    
    return res;
}