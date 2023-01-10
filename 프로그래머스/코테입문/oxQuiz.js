function solution(quiz) {
    const answer = [];
    for(item of quiz){
        let res = myfunc(item)
        answer.push(res);
    }
    return answer;
}

const myfunc = (express) => {
    let ary = express.split(' ');
    ary = ary.map(item => Number.isInteger(parseInt(item)) ? parseInt(item) : item);
    if(ary[1] === '+'){
        let res = ary[0] + ary[2] ;
        if(res === ary[4]){
            return "O"
        }
        else{
            return "X"
        }
    } else {
        let res = ary[0] - ary[2] ;
        if(res === ary[4]){
            return "O"
        }
        else{
            return "X"
        }
    }
}