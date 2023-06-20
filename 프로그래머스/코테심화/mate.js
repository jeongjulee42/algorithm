function solution(X, Y) {

    const answer = [];
    const numberX = new Array(10).fill(0)
    const numberY = new Array(10).fill(0)

    X.split('').forEach(n => numberX[n]++)
    Y.split('').forEach(n => numberY[n]++)

    for (let i = 0; i < 10; i++) {
        const m = Math.min(numberX[i], numberY[i])
        for (let j = 0; j < m; j++) {
            answer.push(i)
        }
    }

    let mateNum = answer.sort((a, b) => b - a)
    if (mateNum[0] == 0){ mateNum = [0]}
    if (mateNum.length == 0) { mateNum = [-1] }
    return String(mateNum.join(""))
}