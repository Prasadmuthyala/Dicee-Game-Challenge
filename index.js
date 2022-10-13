// generate random number and set image with respective random number
let randomNumber1=Math.floor(Math.random()* 6)+1;
document.getElementById(`img1`).setAttribute("src","images/dice"+randomNumber1+".png");

let randomNumber2=Math.floor(Math.random()* 6)+1;
document.getElementById(`img2`).setAttribute("src","images/dice"+randomNumber2+".png");

// function it changes h1 with respective winner,we can use querySelector also
if(randomNumber1>randomNumber2){
  document.getElementsByTagName("h1").item(0).innerText="🚩 Player 1 wins"
}else if (randomNumber1<randomNumber2) {
  document.getElementsByTagName("h1")[0].innerText="Player 2 Wins 🚩"
}else{
  document.getElementsByTagName("h1")[0].innerText="🏁 Draw 🏁";
}
