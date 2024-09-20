// app.js
const names = document.getElementById("names");
const saveNames = document.getElementById("save");
const ul = document.getElementById('ul');
const roller = document.getElementById('roller');
const rollingName = document.getElementById('rolling-name'); // New rolling container
const winner = document.getElementById('winner');

saveNames.addEventListener('click', function () {
    ul.innerHTML = '';  // Clear the list before saving new names
    winner.textContent = '';  // Clear previous winner
    rollingName.textContent = '---'; // Reset the rolling name display

    let namesList = names.value.split('\n').filter(name => name.trim() !== '');
    if (namesList.length === 0) {
        alert('Please enter at least one name.');
        return;
    }

    // Display names in the list
    for (const name of namesList) {
        let li = document.createElement('li');
        li.textContent = name;
        ul.appendChild(li);
    }

    // Create Draw button if it doesn't already exist
    if (!document.getElementById('draw')) {
        let drawButton = document.createElement('button');
        drawButton.id = 'draw';
        drawButton.textContent = 'Draw';
        roller.appendChild(drawButton);

        drawButton.addEventListener('click', function () {
            let iterations = 10; // Number of rolling iterations
            let i = 0;

            const rollingInterval = setInterval(() => {
                let random = Math.floor(Math.random() * namesList.length);
                rollingName.textContent = namesList[random]; // Update the rolling container

                // Add rolling animation class
                rollingName.classList.add('rolling-animation');

                // Remove animation class after it completes
                setTimeout(() => {
                    rollingName.classList.remove('rolling-animation');
                }, 500);

                i++;
                if (i >= iterations) {
                    clearInterval(rollingInterval); // Stop after the iterations

                    // After the rolling effect finishes, show the final winner
                    setTimeout(() => {
                        winner.textContent = `The winner is: ${rollingName.textContent}`;
                    }, 500);
                }
            }, 200);
        });
    }
});
