function solution(strings, n) {
    let ary = strings.sort().map(item => {
        return {
            str:item,
            sortItem:[...item][n]
        }
    })
    ary = ary.sort((a,b) => {
        if(a.sortItem > b.sortItem){
            return 1;
        }
        else if (a.sortItem < b.sortItem){
            return -1;
        }
        else{
            return 0;
        }
    })
    return ary.map(item => item.str)
}