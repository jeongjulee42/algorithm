function solution(str1, str2) {
    let num = 0
    for (const item of [...str1]){
        if(str2[num] === item){
            num++;

            if(num === str2.length)
                {
                    return 1;
                }
            continue;
        }
    }
    return 2;
}