function solution(s) {
    const num = {
        zero: "0",
        one: "1",
        two: "2",
        three: "3",
        four: "4",
        five: "5",
        six: "6",
        seven: "7",
        eight: "8",
        nine: "9"
    };
    for(const item in num){
        const regex = new RegExp(`${item}`, 'g');
        s = s.replace(regex, num[item]);
    }
    return parseInt(s);
}