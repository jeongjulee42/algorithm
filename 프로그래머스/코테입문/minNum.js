function solution(A,B){
    let ary1 = A.sort((a,b) => a - b);
    let ary2 = B.sort((a,b) => b - a);
    let num = 0;
    for(let i = 0; i<ary1.length; i++){
        num += ary1[i] * ary2[i]
    }
    return num;
}