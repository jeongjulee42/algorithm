function solution(d, budget) {
    let ary = d.sort((a,b) => a - b);
    let sum = 0;
    let res = 0;
    while(sum <= budget){
        sum += ary[res];
        res ++;
    }
    return res - 1;
}