function solution(order) {
    const ary = [...order.toString()].map(item => parseInt(item)).filter(item => item%3 === 0).filter(item => item !== 0);
    return ary.length
}