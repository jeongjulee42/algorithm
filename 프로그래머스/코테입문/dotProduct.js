function solution(a, b) {
    let ab = 0;
    for(let i = 0; i<a.length; i++){
        ab += (a[i]*b[i]);
    }
    return ab;
}