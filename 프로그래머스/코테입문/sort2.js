function solution(s) {
    let ary = [...s];
    let ary2 = ary.filter(item => a(item))
    ary2 = ary2.sort().reverse();
    
    let ary3 = ary.filter(item => !a(item))
    ary3 = ary3.sort().reverse();
    
    ary2 = ary2.join('');
    ary3 = ary3.join('');
    return ary2 + ary3
}
                          
function a(item){
    if(item === item.toLowerCase()){
        return true;
    }
    return false;
}