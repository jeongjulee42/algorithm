function solution(arr, divisor) {
    let ary = arr.filter(item => item%divisor === 0)
    if(ary.length === 0){
        return [-1]
    }
    return ary.sort((a,b) => a-b)
}