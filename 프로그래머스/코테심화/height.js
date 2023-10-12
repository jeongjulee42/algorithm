function solution(array, height) {
    const newAry = array.filter(item => item>height)
    return newAry.length
}