document.addEventListener('DOMContentLoaded',function(){
    console.log('chigga')
    const board =document.getElementById('board');
    const square= board.querySelectorAll('div');
    const status= document.getElementById('status');
    
    square.forEach(function(div){
        div.classList.add("square");
    })
    
});