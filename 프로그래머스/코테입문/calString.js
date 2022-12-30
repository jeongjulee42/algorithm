function solution(my_string) {
    const ary = my_string.split(' ').map(item => Number.isInteger(parseInt(item)) ? parseInt(item) : item);
    const ary2 = ary.map((item, index, array) => {
        if (item === '+'){
            return 0;
        }
        else if(item === '-'){
            array[index+1] *= -1;
            return 0;
        } else{
            return item;
        }
    })
    return ary2.reduce((sum,val) => (sum += val), 0)

}