function solution(k, score) {
    let res = [];
    let ary = [];
    for(let i = 0; i < score.length; i++){
        ary.push(score[i]);
        ary.sort((a,b) => b-a)
        if(ary.length > k){
            ary.pop();
        }
        res.push(ary[ary.length - 1])
    }
    return res;
}

