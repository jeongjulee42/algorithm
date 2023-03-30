function solution(polynomial) {
    const ary = polynomial.split(' + ').map(item => item === 'x' ? '1x' : item);
    let x = ary.filter(item => item.includes('x'))
    let c = ary.filter(item => !item.includes('x'))
    
    x = x.map(item => parseInt(item.slice(0, -1))).reduce((sum, val) => (sum += val), 0)
    c = c.map(item => parseInt(item)).reduce((sum, val) => (sum += val), 0)
    
    x = x ? String(x)+'x' : "";
    if(x === "1x"){
        x = 'x'
    }
    c = c ? String(c) : "";
    
    if(x === "" && c === ""){
        return "0";
    }
    else if(x === ""){
        return c;
    }
    else if (c === ""){
        return x;
    }
    else {
        return x + " + " + c;
    }
    
    
    
    console.log(x,c)
}