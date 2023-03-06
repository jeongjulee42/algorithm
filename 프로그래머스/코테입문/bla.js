function solution(babbling) {
    let voca = ['aya', 'ye', 'woo', 'ma'];
    let ary = Array.from(babbling);
    for(i of voca){
        ary = ary.map(item => item.includes(i) ? item.replace(i,'1') : item)
    }
    const res = ary.filter(item => Number.isInteger(Number(item)))
    return res.length;
}