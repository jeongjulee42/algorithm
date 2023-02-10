function solution(t, p) {
    let answer = 0;
    let num = p.length;
    let ary = [];
    for(let i = 0; i < t.length - num + 1; i++){
        if(t[i] <= p[0]){
            ary.push(t.slice(i, i+num))
        }
    }
    ary = ary.filter(item => parseInt(item) <= parseInt(p))
    console.log(ary)
    return ary.length;
}