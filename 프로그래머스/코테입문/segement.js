function solution(lines) {
    let max = Math.max(...lines[0], ...lines[1], ...lines[2])
    let min = Math.min(...lines[0], ...lines[1], ...lines[2])
    let mov = -min;
    
    let ary = lines.map(item => item.map(i => i + mov))
    
    let res = new Array(max - min).fill(0)
    for(item of ary){
        for(let i = item[0]; i<item[1]; i++){
            res[i] = res[i] + 1;
        }
    }
    return res.filter(item => [2,3].includes(item)).length
}