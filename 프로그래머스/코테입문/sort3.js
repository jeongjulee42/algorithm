function solution(numlist, n) {
    const ary = numlist.map(item => [item, Math.abs(item - n)])
    ary.sort((a,b) =>a[1]-b[1])

    for(let i = 1; i<ary.length; i++){
        if(ary[i][1] === ary[i-1][1]){
            if(ary[i][0] > ary[i-1][0]){
                let a = ary[i];
                ary[i] = ary[i - 1];
                ary[i - 1] = a;
            }
        }
    }
    const res = ary.map(item => item[0])
    return res;
}


