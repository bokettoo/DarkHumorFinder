function getJoke() {
    const amount = document.querySelector("#amount").value;
    const term = document.querySelector("#term").value;
    const xhr = new XMLHttpRequest();
    if(term && amount === "1" ){
        const url = `https://v2.jokeapi.dev/joke/Any?type=twopart&contains=${term}&amount=${amount}`;

        xhr.open("GET", url);

        xhr.onload = function () {
            if (xhr.status == 200) {
                let joke = JSON.parse(this.responseText);
                let setup = joke["setup"];
                let delivery = joke["delivery"];
                let jokeContainer = document.querySelector("#joke");
                jokeContainer.innerHTML = `<div class="joke"><p class="setup">${setup}</p><p class="delivery">${delivery}</p></div>`;
            }
        } 
        xhr.send();
        const form = document.getElementById("myForm");
        form.reset();
    } else if(!term && amount === "1" ){
            const url = `https://v2.jokeapi.dev/joke/Any?type=twopart&amount=${amount}`;
    
            xhr.open("GET", url);
    
            xhr.onload = function () {
                if (xhr.status == 200) {
                    let joke = JSON.parse(this.responseText);
                    let setup = joke["setup"];
                    let delivery = joke["delivery"];
                    let jokeContainer = document.querySelector("#joke");
                    jokeContainer.innerHTML = `<div class="joke"><p class="setup">${setup}</p><p class="delivery">${delivery}</p></div>`;
                }
            } 
            xhr.send();
            const form = document.getElementById("myForm");
            form.reset(); 
    } else if (amount && term) {
            const url = `https://v2.jokeapi.dev/joke/Any?type=twopart&contains=${term}&amount=${amount}`;
        
            xhr.open("GET", url);
        
            xhr.onload = function () {
                if (xhr.status == 200) {
                    let response = JSON.parse(this.responseText);
                    let jokes = response["jokes"];
                    let jokeContainer = document.querySelector("#joke");
                    jokeContainer.innerHTML = '';
                    jokes.forEach(joke => {
                        let setup = joke["setup"];
                        let delivery = joke["delivery"];
                        let jokeElement = document.createElement('div');
                        jokeElement.classList.add('joke');
                        jokeElement.innerHTML = `<p class="setup">${setup}</p><p class="delivery">${delivery}</p>`;
                        jokeContainer.appendChild(jokeElement);
                    });
                }
                const form = document.getElementById("myForm");
                form.reset();
            };
        
            xhr.send();
    
    }   else if(term && !amount ){
        const url = `https://v2.jokeapi.dev/joke/Any?type=twopart&contains=${term}`;

        xhr.open("GET", url);

        xhr.onload = function () {
            if (xhr.status == 200) {
                let joke = JSON.parse(this.responseText);
                let setup = joke["setup"];
                let delivery = joke["delivery"];
                let jokeContainer = document.querySelector("#joke");
                jokeContainer.innerHTML = `<div class="joke"><p class="setup">${setup}</p><p class="delivery">${delivery}</p></div>`;
            }
        } 
        xhr.send();
        const form = document.getElementById("myForm");
        form.reset();
    }   else if (amount && !term) {
            const url = `https://v2.jokeapi.dev/joke/Any?type=twopart&amount=${amount}`;
        
            xhr.open("GET", url);
        
            xhr.onload = function () {
                if (xhr.status == 200) {
                    let response = JSON.parse(this.responseText);
                    let jokes = response["jokes"];
                    let jokeContainer = document.querySelector("#joke");
                    jokeContainer.innerHTML = '';
                    jokes.forEach(joke => {
                        let setup = joke["setup"];
                        let delivery = joke["delivery"];
                        let jokeElement = document.createElement('div');
                        jokeElement.classList.add('joke');
                        jokeElement.innerHTML = `<p class="setup">${setup}</p><p class="delivery">${delivery}</p>`;
                        jokeContainer.appendChild(jokeElement);
                    });
                }
                const form = document.getElementById("myForm");
                form.reset();
            };
        
            xhr.send();
    
    }  else if (!term && !amount) {
        const url = "https://v2.jokeapi.dev/joke/Any?type=twopart";
        xhr.open("GET", url);

        xhr.onload = function () {
            if (xhr.status == 200) {
                let joke = JSON.parse(this.responseText);
                let setup = joke["setup"];
                let delivery = joke["delivery"];
                let jokeContainer = document.querySelector("#joke");
                jokeContainer.innerHTML = `<div class="joke"><p class="setup">${setup}</p><p class="delivery">${delivery}</p></div>`;
            }
        }
        xhr.send();
        const form = document.getElementById("myForm");
        form.reset();
    }
}