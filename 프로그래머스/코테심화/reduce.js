function solution(num, total) {
    let res = new Array(num).fill(0);
    res = res.map((item, index) => -num + index)
    let num1 = res.reduce((sum,val) => (sum += val), 0)
    let num2 = 0;
    while(num1 !== total){
        num1 += res.length;
        num2 ++;
    }
    res = res.map(item => item += num2)
    return res
}