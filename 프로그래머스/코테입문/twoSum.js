function solution(numbers) {
    let res = [];
    for(let i = 0; i < numbers.length - 1; i++){
        for(let j = i + 1; j < numbers.length; j++){
            if(!res.includes(numbers[i] + numbers[j]))
                {
                    res.push(numbers[i] + numbers[j]);
                }
        }
    }
    res.sort((a,b) => a-b)
    return res
}