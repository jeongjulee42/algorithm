function solution(brown, yellow) {
    let answer = [];
    for(let min = 1; min <= yellow; min++){
        if(yellow % min === 0){
            let max = yellow / min;
            if(brown === 2*min + 2*max + 4){
                answer[0] = max + 2;
                answer[1] = min + 2;
                break;
            }
        }
        

    }
    return answer;
}
