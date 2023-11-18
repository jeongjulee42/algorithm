function solution(price, money, count) {
    let m = ((1+count)*count/2) * price - money
    return m > 0 ? m : 0
}