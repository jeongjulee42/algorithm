function solution(s) {
    let ary = [];
    let res = [...s].map(item => a(ary, item));
    return res;
}

function a(ary, item){
    if(!ary.includes(item)){
        ary.push(item)
        return -1;
    }
    let num = 0;
    for(let i = ary.length - 1; i >= 0; i --){
        if(ary[i] === item){
            num = ary.length - i
            break;
        }
    }
    ary.push(item)
    return num;
}