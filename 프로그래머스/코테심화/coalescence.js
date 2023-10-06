function solution(n) {
    let count = 0;
    for(let i = 1; i<=n; i++){
        const ary = [];
        for(let j = 1; j<=i; j++){
            if(i % j === 0){
                ary.push(j);
            }
        }
        if(ary.length > 2){
            count++;
        }

    }
    return count;
}