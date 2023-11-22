var randonNumber1 = Math.floor(Math.random() *6)+1;
var diceImage1 = "images/dice"+randonNumber1+".png";
document.querySelector(".img1").setAttribute("src" , diceImage1);

var randonNumber2 = Math.floor(Math.random() *6)+1;
var diceImage2 = "images/dice"+randonNumber2+".png";
document.querySelector(".img2").setAttribute("src" , diceImage2);

if(randonNumber1 > randonNumber2)
{
    document.querySelector("h1").innerHTML = " 🏆 Player 1 Wins ";
}else if((randonNumber1 < randonNumber2)){
    document.querySelector("h1").innerHTML = " 🏆 Player 2 Wins ";
}else{
    document.querySelector("h1").innerHTML = " 👍 It's a Tie ";

}