function solution(board) {
    // 칸 추가
    for(let i = 0; i<board.length; i++){
        board[i].push(0);
        board[i].unshift(0);
    }
    board.unshift(new Array(board.length + 2).fill(0))
    board.push(new Array(board.length + 1).fill(0))
    
    // 1 주변 바꾸기
    for(let i = 1; i < board.length - 1; i++){
        for(let j = 1; j < board.length - 1; j++){
            if(board[i][j] === 1){
                board[i][j-1] = board[i][j-1] === 0 ? 2 : board[i][j-1];
                board[i][j+1] = board[i][j+1] === 0 ? 2 : board[i][j+1];
            }
        }
    }
    
    for(let i = 0; i < board.length - 1; i++){
        for(let j = 0; j < board.length; j++){
            if(board[i+1][j] !== 0){
                board[i][j] = 2;
            }
        }
    }
    console.log(board)
    for(let i = board.length - 1; i > 0; i--){
        for(let j = 0; j < board.length; j++){
            if(board[i-1][j] !== 0){
                board[i][j] = 2;
            }
        }
    }
    console.log(board)
    
    // 상하좌우 한칸씩 자르기
    board.pop();
    board.shift();
    for(let i = 0; i<board.length; i++){
        board[i].pop();
        board[i].shift();
    }
    
    // 결과 리턴
    let res = 0;
    for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board.length; j++){
            if(board[i][j] === 0){
                res ++;
            }
        }
    }
    return res;
}

