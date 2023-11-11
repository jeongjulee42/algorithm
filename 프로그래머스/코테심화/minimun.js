function solution(arr) {
    let min = Math.min(...arr);
    console.log(min)
    if(arr.length === 1){
        return [-1]
    }
    let index = arr.indexOf(min);
    arr.splice(index, 1);
    return arr;
}