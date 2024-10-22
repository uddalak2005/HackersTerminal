let yesButton = document.getElementById('yes');
let noButton = document.getElementById('no');
let consoleScreen = document.getElementById('console');
let buttonArea = document.getElementById('buttonArea');

function printContent(content, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (consoleScreen) {
                consoleScreen.innerText += `$_> ${content}`;
            } else {
                console.error('consoleScreen element not found');
            }
            resolve('done');
        }, delay);
    });
}

function dots() {
    return new Promise((resolve, reject) => {
        let count = 0;
        const intervalId = setInterval(() => {
            if (count < 3) {
                consoleScreen.innerText += '.';
                count++;
            } else {
                clearInterval(intervalId);
                resolve('done');
            }
        }, 500);
    });
}

yesButton.addEventListener('click', async () => {
    buttonArea.style.display = "none";
    consoleScreen.classList.add("bg-slate-950");
    try {
        await printContent("Initialising Hacking",1000);
        await dots();
        consoleScreen.innerHTML += '<br>'; 
        await printContent("Reading your files",1000);
        await dots();
        consoleScreen.innerHTML += '<br>';
        await printContent("Password of files Detected",1500);
        await dots();
        consoleScreen.innerHTML += '<br>';
        await printContent("Sending all passwords and personal files to server",1500);
        await dots();
        consoleScreen.innerHTML += '<br>';
        await printContent("Cleaning up",2000);
        await dots();
        consoleScreen.innerHTML += '<br>';
    }catch(err){
        console.log('error -> ', err);
    }

});