function solution(num_list) {
    evenNum = num_list.filter(item => item%2 === 0).length
    return [evenNum, num_list.length - evenNum]
}