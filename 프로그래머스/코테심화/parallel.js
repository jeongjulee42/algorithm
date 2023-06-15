function solution(dots) {
    const ary = [];
    
    for(let i = 0; i<dots.length - 1; i++){
        for(let j = i+1; j < dots.length; j++){
            ary.push(a(dots[i], dots[j]))
        }
    }
    console.log(ary)
    while(ary.length !== 0){
        let b = ary.pop();
        if(ary.filter(item => same(item, b)).length !== 0){
            return 1;
        }
    }
    return 0;

    
}


// 기울기 구하는 함수 -> 기울기 -이면 x 에 - 넣자.
function a (dot1, dot2){
    let x = dot2[0] - dot1[0];
    let y = dot2[1] - dot1[1];
    let g = gcd(x,y)
    if(x*y < 0){
        return [-Math.abs(x/g), Math.abs(y/g)]
    }
    return [x/g, y/g]
} 
function same (dot1, dot2){
    if(dot1[0] === dot2[0]){
        if(dot1[1] === dot2[1]){
            return true;
        }
    }
    return false;
}

function gcd (a,b) {
    if( b===0){
        return a;
    }
    return gcd(b, a%b);
}