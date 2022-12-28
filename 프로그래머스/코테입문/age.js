function solution(age) {
    const ary = ['a','b','c','d','e','f','g','h','i','j'];
    const str = age.toString();
    const newary = [...str];
    const res = newary.map((item) => ary[parseInt(item)]);
    return res.join('')
}