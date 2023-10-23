function isWin(state){
        const win = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8],[0, 4, 8], [2, 4, 6]];
    
        for (const condition of win) {
            const [a, b, c] = condition;
            if (state[a] && state[a] == state[b] && state[b] == state[c] && state[c]) {
              return [true, state[a]];
            }
          }
    
        return false;
}

document.addEventListener('DOMContentLoaded',function(){
    // console.log('chigga')
    const board =document.getElementById('board');
    const square= board.querySelectorAll('div');
    const status= document.getElementById('status');
    const newGame=document.querySelector('.btn');
    
    square.forEach(function(div){
        div.classList.add("square");
    });
    
    let xo ="X";
    state=["1","2","3","4","5","6","7","8","9",];
    winnerval= ""

    square.forEach((sq, index)=> {
        sq.addEventListener('click',()=>{
                // console.log(xo);
                if (sq.textContent==""){
                    sq.classList.add(xo);
                    sq.textContent = xo;
                    state[index]=xo;
                }
                if (xo=='X'){
                    xo='O';
                    // console.log(state);
                }
                else if (xo=='O'){
                    xo='X';
                    // console.log(state);
                }
                if (isWin(state)[0]==true){
                    winnerval= isWin(state)[1];
                    console.log(winnerval);
                    status.textContent=`Congratulations! ${winnerval} is the Winner!`;
                    status.classList.add('you-won');
                }
            });
    });

    board.addEventListener('mouseover',function (e) {
        if (e.target.classList.contains('square')){
            const sq=e.target;
            sq.classList.add('hover');
        }
    })
    board.addEventListener('mouseout',function (e) {
        if (e.target.classList.contains('square')){
            const sq=e.target;
            sq.classList.remove('hover');
        }
    });
    newGame.addEventListener('click',() => {
        state=["1","2","3","4","5","6","7","8","9",];
        winner= false;
        winnerval= ""
        square.forEach(function(div){
            div.textContent="";
            div.classList.remove('X');
            div.classList.remove('O');
        });
        status.classList.remove('you-won');
        status.textContent = "Move your mouse over a square and click to play an X or an O.";
        winnerval= "";

    });

});