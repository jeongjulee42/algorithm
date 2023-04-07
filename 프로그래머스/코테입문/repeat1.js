function solution(s) {
    let res = [0,0];
    abc([...s], res)
    return res;
}

function abc(ary, res){
    if(ary.length === 1){
        return;
    }
    let ary2 = ary.filter(item => item === '1');
    res[1] += ary.length - ary2.length;
    res[0] += 1;
    let num = ary2.length;
    num = num.toString(2);
    num = String(num);
    num = [...num]
    abc(num, res);
}