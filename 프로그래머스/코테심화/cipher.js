function solution(cipher, code) {
    const ary = [];
    const cd = [...cipher]
    const num = code - 1;
    for(let i = num; i<cd.length; i+= code){
        ary.push(cd[i])
    }
    return ary.join('')
}