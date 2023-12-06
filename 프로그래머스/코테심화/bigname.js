function solution(array) {
    const ary = Array.from(array);
    ary.sort((a,b) => b-a)

    let maxindex = array.indexOf(ary[0])

    return [ary[0], maxindex]
}