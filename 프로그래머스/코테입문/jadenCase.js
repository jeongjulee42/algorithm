function solution(s) {
    let ary = [...s];
    ary = ary.map((item, index, array) => {
        if(index === 0){
            return item.toUpperCase();
        }
        if(array[index - 1] === ' '){
            return item.toUpperCase();
        }
        else{
            return item.toLowerCase();
        }
        
    })
    return ary.join('')
}