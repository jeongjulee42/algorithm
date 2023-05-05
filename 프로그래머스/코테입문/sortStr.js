function solution(my_string) {
    let res = [];
    for(item of my_string){
        if(Number.isInteger(parseInt(item))){
            res.push(parseInt(item))
        }
    }
    return res.sort((a,b) => a-b);
}