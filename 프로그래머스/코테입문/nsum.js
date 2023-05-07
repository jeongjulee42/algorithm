function solution(n) {
    let ary = [];
    if(n === 1){
        return 1;
    }
    for(let i = 1; i < Math.ceil(n/2); i++){
        if(n % i === 0){
            ary.push(i);
            ary.push(n/i);
        }
    }
    ary = new Set(ary);
    ary = [...ary]
    return ary.reduce((sum, val) => (sum += val), 0)
}