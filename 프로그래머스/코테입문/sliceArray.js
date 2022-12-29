function solution(my_str, n) {
    const ary = [...my_str];
    let num = 0;
    let ary2 = [];
    const res = [];
    for(let i = 0; i<ary.length; i++){
        ary2.push(ary[i]);
        num ++;
        
        if(num === n){
            res.push(ary2.join(''));
            ary2 = [];
            num = 0;
        }
    }
    if(num !== 0){
        res.push(ary2.join(''));
    }
    return res;
}