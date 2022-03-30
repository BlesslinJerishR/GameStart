const gstop = document.querySelector('h1');
const redish = document.querySelector('span');

gstop.addEventListener('click',() => {
    if(redish.textContent === 'Stop'){
        redish.textContent = 'Start'
    }else{
        redish.textContent = "Stop"
    }
});

$(document).ready(function(){
    $("h1").dblclick(function(e){
        e.preventDefault();
    });
});