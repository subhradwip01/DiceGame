var player1 = Math.round(Math.random() * 6);
var player2 = Math.round(Math.random() * 6);



var imgSource1 = 'images/dice' + player1 + '.png';
document.querySelector(".palyer1-dice img").setAttribute("src",imgSource1)

var imgSource2 = 'images/dice' + player2 + '.png';
document.querySelector(".palyer2-dice img").setAttribute("src", imgSource2)

if (player1 == player2) {
    document.querySelector("h1").innerText = "Tie";
}
else {
    if (player1 > player2) {
        document.querySelector("h1").innerText = "Player 1 won";
    }
    else {
        document.querySelector("h1").innerText = "Player 2 won";
    }
}