function solution(numbers, direction) {
    const res = Array.from(numbers);
    if(direction === 'left'){
        let item = res.shift();
        res.push(item)
    }else {
        let item = res.pop();
        res.unshift(item)
    }
    
    return res;
}