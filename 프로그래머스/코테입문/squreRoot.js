function solution(n) {
    let i = 1;
    while(i*i <= n){
        if(i*i === n){
            return (i+1) * (i+1);
        }
        i++
    }
    return -1;
}