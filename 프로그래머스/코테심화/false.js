function solution(s) {
    let ary = [...s];
    if(ary.length === 4 || ary.length === 6){
        ary = ary.map(item => parseInt(item))
        if(ary.length === ary.filter(item => Number.isInteger(item)).length){
            
            return true;
        }
    }
    return false;
}