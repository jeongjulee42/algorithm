function solution(sizes) {
    let ary = sizes.map(item => item.sort((a,b) => b-a));
    let ary1 = ary.map(item => item[0]);
    let ary2 = ary.map(item => item[1]);

    return Math.max(...ary1) * Math.max(...ary2)
}