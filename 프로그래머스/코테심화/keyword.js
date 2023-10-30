function solution(n, words) {
    let answer = [0, 0];
    
    let ary = [];
    ary.push(words[0])
    if(words[0].length === 1){
        return [1,1];
    }

    for(let i = 1; i < words.length; i++){
        if(words[i].lenght === 1){
            answer[0] = i % n + 1;
            answer[1] = parseInt(i / n + 1);
        }
        if(words[i][0] !== words[i - 1][words[i-1].length - 1] || ary.includes(words[i])){
            answer[0] = i % n + 1;
            answer[1] = parseInt(i / n + 1);
            console.log(i)
            break;
        }
        ary.push(words[i])
    }

    return answer;
}