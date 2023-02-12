function solution(food) {
    let water = "";
    for(let i = 0; i < food[0]; i++){
        water += "0";
    }
    console.log(water)
    let f = ""
    for(let i = 1; i < food.length; i++){
        for(let j = 0; j < parseInt(food[i] / 2); j++){
            f += i.toString();
        }
    }
    return f + water + [...f].reverse().join('');
}