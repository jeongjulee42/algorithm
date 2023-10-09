function solution(sides) {
    const ary = [];
    let max = sides.reduce((sum, val) => (sum += val), 0);
    let min = Math.max(...sides)
    for(let i = min; i < max; i++){
        ary.push(i);
    }
    max = Math.max(...sides);
    min = Math.min(...sides);
    
    for(let i = max - min + 1; i < max; i++){
        ary.push(i)
    }
    return ary.length;
}
