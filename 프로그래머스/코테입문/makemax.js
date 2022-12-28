function solution(numbers) {
    const plus = numbers.filter(item => item > 0);
    const minus = numbers.filter(item => item < 0);
    plus.sort((a,b) => b-a);
    minus.sort((a,b) => a-b);
    let plusnum;
    let minusnum;
    
    if(numbers.length === 2){
        return numbers[0] * numbers[1]
    }
    
    if(plus.length >= 2){
        plusnum = plus[0]*plus[1];
    }
    else {
        plusnum = 0;
    }
    
    if(minus.length >= 2){
        minusnum = minus[0]*minus[1];
    }
    else {
        minusnum = 0;
    }
    

    
    return plusnum > minusnum ? plusnum : minusnum
}