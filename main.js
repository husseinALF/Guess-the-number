const matcher = document.querySelector(".guessMatcher");
const input = document.getElementById("guessInput");
const guessResult = document.querySelector(".guessList");
const guessBtn = document.getElementById("button");
guessBtn.addEventListener("click", myFunction);

let x = Math.floor(Math.random() * 100) + 1;

function myFunction() {

    let y = input.value;

    if (x === y) {
        matcher.innerHTML = "You Win";
    } else if (y > x) {

        matcher.innerHTML = "You need to guess lower than " + y + " try again";
    } else {
        matcher.innerHTML = "You need to guess higher than " + y + " try again";

    }
    let list = document.createElement("li");
    list.textContent = y.toString();
    guessResult.appendChild(list);
}

