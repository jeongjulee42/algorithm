function solution(x) {
    let a = String(x);
    let h = [...a].map(item => parseInt(item)).reduce((sum, val) => (sum += val), 0);
    if(x % h === 0){
        return true;
    }
    return false;
}