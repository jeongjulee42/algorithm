function solution(before, after) {
    const ary1 = [...before].sort();
    const ary2 = [...after].sort();
    if(ary1.length === ary2.length){
        for(let i = 0; i<ary1.length; i++){
            if(ary1[i] !== ary2[i]){
                return 0;
            }
        }
        return 1;
    }
    return 0;
    
}