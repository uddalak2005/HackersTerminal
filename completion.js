let counter = document.getElementById("counter");

let count = 5
const interval = setInterval(() => {
    if(count >= 0){
        counter.innerText = count;
        count--;
    }
    else{
        clearInterval(interval);
        window.location.href = './index.html';
    }
}, 1000);