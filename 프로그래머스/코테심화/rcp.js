function solution(rsp) {
    const ary = [...rsp]
    let res = '';
    for (item of rsp){
        switch (item){
            case '0':
                res += '5'
                break;
            case '2':
                res += '0'
                break;
            case '5':
                res += '2'
                break;
        }
    }
    return res;
}