document.getElementById("myForm").addEventListener("keydown", FindJoke);

function FindJoke(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        getJoke();
    }
}

function getJoke() {
    const amount = document.querySelector("#amount").value;
    const term = document.querySelector("#term").value;
    const xhr = new XMLHttpRequest();

    let url = "https://v2.jokeapi.dev/joke/Any?type=twopart";
    if (term) url += `&contains=${term}`;
    if (amount) url += `&amount=${amount}`;

    xhr.open("GET", url);
    xhr.onload = function () {
        if (xhr.status == 200) {
            let response = JSON.parse(this.responseText);
            if (response.hasOwnProperty("setup")) {
                let setup = response["setup"];
                let delivery = response["delivery"];
                renderJoke(setup, delivery);
            } else if (response.hasOwnProperty("jokes")) {
                renderMultipleJokes(response["jokes"]);
            } else if (response.hasOwnProperty("message")) {
                displayPopup(`Couldn't find a joke with the term ${term}`);
            }
        }
    };
    const form = document.getElementById("myForm");
    form.reset();
    xhr.send();
}


function renderJoke(setup, delivery) {
    let jokeContainer = document.querySelector("#joke");
    jokeContainer.innerHTML = `<div class="joke"><p class="setup">${setup}</p><p class="delivery">${delivery}</p></div>`;
}

function renderMultipleJokes(jokes) {
    let jokeContainer = document.querySelector("#joke");
    jokeContainer.innerHTML = '';
    jokes.forEach(joke => {
        let setup = joke["setup"];
        let delivery = joke["delivery"];
        if (setup !== undefined && delivery !== undefined) {
            let jokeElement = document.createElement('div');
            jokeElement.classList.add('joke');
            jokeElement.innerHTML = `<p class="setup">${setup}</p><p class="delivery">${delivery}</p>`;
            jokeContainer.appendChild(jokeElement);
        }
    });
}

function displayPopup(message) {
    const popup = document.getElementById("popup");
    const popupMessage = document.getElementById("popup-message");
    popupMessage.innerText = message;
    popup.style.display = "block";
}

function closePopup() {
    const popup = document.getElementById("popup");
    popup.style.display = "none";
}
