function solution(s)
{
    let ary = [];
    for(let i = 0; i < s.length; i++){
        ary.push(s[i]);
        while(ary.length > 1 && ary[ary.length - 1] === ary[ary.length - 2]){
            ary.pop();
            ary.pop();
        }
    }
    return ary.length === 0 ? 1 : 0
}

