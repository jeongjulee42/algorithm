function solution(array) {
    const newAry =  array.sort((a,b)=> a-b)
    return newAry[parseInt(array.length / 2)]
}