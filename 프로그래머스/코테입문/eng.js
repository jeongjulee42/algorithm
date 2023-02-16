function solution(numbers) {
    const obj = {
        "one":'1',
        "two":'2',
        "three":'3',
        "four":'4',
        "five":'5',
        "six":'6',
        "seven":'7',
        "eight":'8',
        "nine":'9',
        "zero":'0',
    }
    let str = [...numbers].join('')
    for(item in obj){
        let j = new RegExp(item, "g")
        str = str.replace(j, obj[item])
    }
    return parseInt(str);
}