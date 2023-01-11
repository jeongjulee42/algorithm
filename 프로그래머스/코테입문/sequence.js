function solution(common) {
    const res = common[1]-common[0] === common[2] - common[1] ? vk(common) : emd(common);
    return res;
}


function vk(common){
    const num = common[1] - common[0];
    return common.pop() + num;
}


function emd(common){
    const num = common[1] / common[0];
    return common.pop() * num;
}