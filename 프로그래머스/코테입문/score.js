function solution(score) {
    let ary = score.map(item => (item[0] + item[1]) / 2)
    let res = Array.from(ary);

    res = res.map(item => [item, -1]);

    ary.sort((a,b) => b - a);
    
    ary = ary.map((item,index) => [item, index + 1])
    
    for(let i = 1; i<ary.length; i++){
        if(ary[i][0] === ary[i-1][0]){
            ary[i][1] = ary[i-1][1];
        }
    }

    for(item of ary){
        res = res.map(i => i[0] === item[0] ? [i[0],item[1]] : i);
        
    }
    return res.map(item => item[1]);
}