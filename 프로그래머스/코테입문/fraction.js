function solution(denum1, num1, denum2, num2) {
    let resNum;
    let resDenum;

    if(num1 === num2) {
        resNum = num1;
        resDenum = denum1+denum2;
    }
    else {
        resNum = num1 * num2;
        resDenum = num2*denum1 + num1* denum2;
    }
    
    let num3 = gcd(resNum, resDenum);
    resNum = resNum / num3;
    resDenum = resDenum / num3;
    
    return [resDenum, resNum];
}

function gcd(a,b) {
    const maxNum = Math.max(a,b);
    const minNum = Math.min(a,b);
    return (maxNum % minNum) === 0 ? minNum : gcd(minNum, maxNum % minNum);
}