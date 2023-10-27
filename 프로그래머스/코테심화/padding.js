function solution(n, arr1, arr2) {
    let padding = new Array(n).fill(0).join('')
    let ary1 = arr1.map(item => (padding + item.toString(2)).substr(-padding.length)).map(item => [...item]);
    let ary2 = arr2.map(item => (padding + item.toString(2)).substr(-padding.length)).map(item => [...item]);

    
    for(let i = 0; i < ary1.length; i++){
        for(let j = 0; j < ary1.length; j++){
            if(parseInt(ary1[i][j]) + parseInt(ary2[i][j]) === 0){
                ary1[i][j] = ' '
            }
            else {
                ary1[i][j] = '#'
            }
        }
    }
    return ary1.map(item => item.join(''))
}