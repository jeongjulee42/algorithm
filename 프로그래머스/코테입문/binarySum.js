function solution(bin1, bin2) {
    const bin1ary = [...bin1].map(item => parseInt(item));
    const bin2ary = [...bin2].map(item => parseInt(item));
    const num = Math.max(bin1ary.length, bin2ary.length) + 1;
    let ary = [];
    let more = 0;
    for (let i = num - 1; i>=0; i--){
        let a = bin1ary.pop() || 0;
        let b = bin2ary.pop() || 0;
        if(a+b+more === 3){
            ary.unshift(1)
            more = 1;
        }
        else if(a+b+more === 2){
            ary.unshift(0)
            more = 1;
        }
        else if (a+b+more === 1){
            ary.unshift(1)
            more = 0;
        }
        else {
            ary.unshift(0)
            more = 0;
        }
    }
    if(ary[0] === 1){
        return ary.map(item => item.toString()).join('')
    }
    else{
        ary.map(item => item.toString())
        ary.shift()
        return ary.join('')
    }
}