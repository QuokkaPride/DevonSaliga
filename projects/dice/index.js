function rollDice() {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    console.log(randomNumber1);

    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    console.log(randomNumber2);


    document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
    document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "You Win!";
    } else if (randomNumber1 < randomNumber2) {
        document.querySelector("h1").innerHTML = "The Computer Wins!";
    } else {
        document.querySelector("h1").innerHTML = "Draw!";
    }
}