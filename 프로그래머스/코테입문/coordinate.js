function solution(keyinput, board) {
    const res = [0,0];
    const ver = Math.floor(board[1] / 2)
    const hor = Math.floor(board[0] / 2)
    
    for(item of keyinput){
        switch (item) {
            case 'left':
                res[0] -= 1;
                break;
            case 'right':
                res[0] += 1;
                break;
            case 'up':
                res[1] += 1;
                break;
            case 'down':
                res[1] -= 1;
                break;
        }
        if(res[0] > hor){
            res[0] -= 1;
        }
        else if (res[0] < -hor){
            res[0] += 1;
        }
        if(res[1] > ver){
            res[1] -= 1;
        }
        else if (res[1] < -ver){
            res[1] += 1;
        }
    }
    return res;
}