function solution(num_list, n) {
    const res = [];
    let ary = [];
    for (let i = 0; i<num_list.length + 1; i++){
        if(i % n === 0 && i !== 0){
            res.push(ary);
            ary = [];
        }
        ary.push(num_list[i])
    }
    return res;
}