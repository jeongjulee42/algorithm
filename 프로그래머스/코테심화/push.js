function solution(my_string, n) {
    const ary = [...my_string].map(item => {
        const ary2 = []
        for (let i = 0; i<n; i++){
            ary2.push(item)
        }
        return ary2;
    })
    return ary.flat(2).join('');
}