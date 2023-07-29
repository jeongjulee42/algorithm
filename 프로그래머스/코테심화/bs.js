function solution(my_string) {
    const ary = [...my_string]
    for (let i = 0; i<ary.length; i++){
        if(ary[i] === ary[i].toLowerCase()){
            ary[i] = ary[i].toUpperCase()
        }
        else {
            ary[i] = ary[i].toLowerCase()
        }
    }
    return ary.join('');
}