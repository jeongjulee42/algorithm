function solution(dots) {
    const ver = [];
    const hor = [];
    for (item of dots){
        hor.push(item[0]);
        ver.push(item[1]);
    }
    return (Math.max(...hor) - Math.min(...hor))*(Math.max(...ver) - Math.min(...ver))
}