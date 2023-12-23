function solution(spell, dic) {
    let ary = Array.from(dic).filter(item => item.length === spell.length);
    for (item of spell){
        ary = ary.filter(i => [...i].includes(item))
    }
    if(ary.length === 0){
        return 2;
    }
    return 1;
}