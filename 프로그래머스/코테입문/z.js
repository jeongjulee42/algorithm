function solution(s) {
    const ary = s.split(' ')
    ary.map((item,index) => {
        if(item === 'Z'){
            ary[index - 1] = 0;
        }
    });
    const ary2 = ary.filter(item => item !== 'Z').map(item => parseInt(item));
    return ary2.reduce((sum, val) => (sum += val), 0)
}