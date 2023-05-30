function srcImg(randNum) {
    if (randNum === 1) {
        imgLocation = "./images/dice1.png";
    } else if (randNum === 2) {
        imgLocation = "./images/dice2.png";
    } else if (randNum === 3) {
        imgLocation = "./images/dice3.png";
    } else if (randNum === 4) {
        imgLocation = "./images/dice4.png";
    } else if (randNum === 5) {
        imgLocation = "./images/dice5.png"
    } else {
        imgLocation = "./images/dice6.png";
    }
    return imgLocation;
}

var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var p1Tag = document.querySelector(".img1");
p1Tag.setAttribute("src", srcImg(randomNumber1));

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var p2Tag = document.querySelector(".img2");
p2Tag.setAttribute("src", srcImg(randomNumber2));

var h1tag = document.querySelector("h1");
if (randomNumber1 > randomNumber2) {
    h1tag.innerHTML = "🚩 Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
    h1tag.innerHTML = "Player 2 Wins! 🚩";
} else {
    h1tag.innerHTML = "Draw!";
}