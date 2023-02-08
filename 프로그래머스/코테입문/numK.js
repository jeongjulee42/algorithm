function solution(array, commands) {
    let res = [];
    for(const item of commands){
        let start = item[0];
        let end = item[1];
        let num = item[2];
        let ary = array.slice(start-1, end).sort((a,b) => a-b);
        res.push(ary[num - 1])
    }
    return res;
}