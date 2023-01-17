function solution(num) {
    let i = 1;
    if(num === 1){
        return 0;
    }
    let n = num;
    while(i < 500){
        if(n % 2 === 0){
            n = n/2;
        }
        else{
            n = n * 3 + 1
        }
        
        if(n === 1){
            return i;
        }
        i++;
    }
    return -1;
}