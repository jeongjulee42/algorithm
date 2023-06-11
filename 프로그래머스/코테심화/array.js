function solution(arr1, arr2) {
    const ary = []
    for(let i = 0; i < arr1.length; i ++){
        const ary2 = [];
        for(let j = 0; j < arr1[i].length; j++){
            
            ary2.push(arr1[i][j] + arr2[i][j])
        }
        ary.push(ary2)
    }
    return ary;
}