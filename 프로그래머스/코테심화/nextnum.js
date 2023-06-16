function solution(common) {
    const res = common[1]-common[0] === common[2] - common[1] ? vk(common) : emd(common);
    return res;
}

// 등차인 경우 처리 함수
function vk(common){
    const num = common[1] - common[0];
    return common.pop() + num;
}

// 등비인 경우 처리 함수
function emd(common){
    const num = common[1] / common[0];
    return common.pop() * num;
}