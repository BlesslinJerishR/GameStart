const gstop = document.querySelector('h1');
const redish = document.querySelector('.red');

gstop.addEventListener('click',() => {
    if(redish.textContent === "Stop"){
        redish.textContent = "Start"
    }else{
        redish.textContent = "Stop"
    }
});
