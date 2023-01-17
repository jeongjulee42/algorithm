function solution(n)
{   
    let ary = [...String(n)].map(item => parseInt(item))
    return ary.reduce((sum, val) => (sum += val), 0)
}