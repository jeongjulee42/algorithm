function solution(n) {
    let res = [...String(n)]
    
    return res.reverse().map(item => parseInt(item))
}