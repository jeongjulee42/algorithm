function solution(emergency) {
    const ary = Array.from(emergency)
    ary.sort((a,b) => b-a);
    return emergency.map(item => ary.indexOf(item)+ 1)
}