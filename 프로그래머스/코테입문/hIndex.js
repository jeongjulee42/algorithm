function solution(citations) {
    let hIndex = [];
    for(let i = 0; i <= citations.length; i++){
        if(citations.filter(item => item >= i).length >= i){
            hIndex.push(i)
        }
    }
    return Math.max(...hIndex)
}