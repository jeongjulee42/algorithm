function solution(s, n) {
    let ary = [...s];
    return ary.map(item => caesar(item, n)).join('');
}

function caesar(item, num){
    
    if(item === ' '){
        return ' ';
    }
    
    let big = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
    let small = [..."abcdefghijklmnopqrstuvwxyz"];
    let length = big.length;
    
    if(item === item.toUpperCase()){
        let n = big.indexOf(item);
        return big[(n + num + length) % length]
    }
    else{
        let n = small.indexOf(item);
        return small[(n + num + length) % length]
    }
}