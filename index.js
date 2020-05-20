var rn = Math.floor((Math.random()*6));
var rs = Math.floor((Math.random()*6));
var images = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"]

function random_image1(){
  document.getElementById("img1").src = images[rn];
}
function random_image2(){
  document.getElementById("img2").src = images[rs];
  if(rs > rn){
    document.getElementById("heading").innerHTML = "Player 2 Wins!";
  }
  else if(rs < rn){
    document.getElementById("heading").innerHTML = "Player 1 Wins!";
  }
  else {
    document.getElementById("heading").innerHTML = "Draw";
  }
}
