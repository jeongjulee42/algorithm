function solution(chicken) {
    let res = 0;
    let cpn = chicken;
    
    while(cpn >= 10){
        let num = (parseInt(cpn / 10));
        res += num;
        cpn = (cpn - num*10 + num);
    }
    return res;
}


