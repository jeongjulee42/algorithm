function solution(s){
    let ary = [...s.toLowerCase()];
    if(ary.filter(item => item === 'p').length === ary.filter(item => item === 'y').length){
        return true;
    }
    return false;
}