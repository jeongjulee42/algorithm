function solution(s) {
    let ary = s.split(' ');
    ary = ary.map(item => {
        let str = [...item];
        str = str.map((i, index) => index % 2 === 0 ? i.toUpperCase() : i.toLowerCase());
        return str.join('')
    })
    
    return ary.join(' ');
}