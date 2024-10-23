document.addEventListener('DOMContentLoaded', () => {
    // Get references to the necessary DOM elements
    let yesButton = document.getElementById('yes');
    let noButton = document.getElementById('no');
    let consoleScreen = document.getElementById('console');
    let buttonArea = document.getElementById('buttonArea');
    let body = document.querySelector('body');
    let para1=  document.getElementById('para1');




    // Function to print content to the console with a delay
    function printContent(content, delay) {
        return new Promise((resolve) => {
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

    // Function to simulate loading dots
    function dots() {
        return new Promise((resolve) => {
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

    // Event listener for the YES button
    yesButton.addEventListener('click', async () => {
        // Show the GIF and hide the button area
        buttonArea.style.display = "none";
        consoleScreen.classList.add("bg-slate-950"); 
        consoleScreen.innerText = "";
        body.style.background = "url(\"../public/hacker.gif\")";
        body.style.backgroundRepeat = "no-repeat";
        body.style.backgroundSize = "cover";
        para1.innerText = "BHAYANKAR HECKING UNDER PROGRESS";
        para1.classList.add('text-8xl');
    
    
        await printContent("Initialising Hacking", 1000);
        await dots();
        consoleScreen.innerHTML += '<br>'; 
        await printContent("Reading your files", 1000);
        await dots();
        consoleScreen.innerHTML += '<br>';
        await printContent("Password of files Detected", 1500);
        await dots();
        consoleScreen.innerHTML += '<br>';
        await printContent("Sending all passwords and personal files to server", 1500);
        await dots();
        consoleScreen.innerHTML += '<br>';
        await printContent("Cleaning up", 2000);
        await dots();
        consoleScreen.innerHTML += '<br>';
        setTimeout(() => {}, 500);
        window.location.href= './DoneHecking.html'
    });

    // Optional: Event listener for the NO button (if needed)
    noButton.addEventListener('click', () => {
        consoleScreen.innerText += "Operation cancelled.\n";
        gifFile.style.display = "none"; // Hide the GIF if NO is clicked
        buttonArea.style.display = "flex"; // Show the button area again
    });
});