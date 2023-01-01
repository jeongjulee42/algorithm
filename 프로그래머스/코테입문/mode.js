function solution(array) {
    const obj = {};
    for(item of array){
        if(item in obj){
            obj[item]++;
        }
        else{
            obj[item] = 1;
        }
    }
    let maxnum=0;
    let maxindex=0;
    for(item in obj){
        if(obj[item] >= maxnum){
            maxindex = item;
            maxnum = obj[item];
        }
        console.log(item, obj[item], maxindex);
    }
    let rescount = 0;
    for(item in obj){
        if(maxnum === obj[item]){
            rescount++;
        }
    }
    if(rescount > 1){
        return -1
    }
    return parseInt(maxindex);
}