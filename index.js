
// Function Declaration

function rollDiceVisible(){
      document.querySelector("h1").style.opacity="0";
      document.querySelector(".container .img1").style.opacity="0";
      document.querySelector(".container .img2").style.opacity="0";
      document.querySelector(".player1").style.opacity="0";
      document.querySelector(".player2").style.opacity="0";
      document.querySelector(".roll-dice").style.display="block";
      document.querySelector(".testbutton").innerHTML="STOP";
}

function rollDiceInvisible(){
      document.querySelector(".roll-dice").style.display="none";
      document.querySelector("h1").style.opacity="1";
      document.querySelector(".container .img1").style.opacity="1";
      document.querySelector(".container .img2").style.opacity="1";
      document.querySelector(".player1").style.opacity="1";
      document.querySelector(".player2").style.opacity="1";


      // Random Number for Dice Left Image

      var randomNumber1=Math.floor(Math.random()*6)+1;
      var diceImage1="./images/dice"+randomNumber1+".png";
      document.querySelector(".img1").setAttribute("src",diceImage1);

      // Random Number for Dice Right Image

      var randomNumber2=Math.floor(Math.random()*6)+1;
      var diceImage2="./images/dice"+randomNumber2+".png";
      document.querySelector(".img2").setAttribute("src",diceImage2);

      // Selecting Winner

      if(randomNumber1 === randomNumber2){
        document.querySelector("h1").innerHTML="Draw!";
      } else if (randomNumber1>randomNumber2) {
          var player1=document.querySelector(".player1").innerHTML;
          document.querySelector("h1").innerHTML="🚩 "+player1+" Wins!";
      } else {
          var player2=document.querySelector(".player2").innerHTML;
          document.querySelector("h1").innerHTML=player2+" Wins! 🚩";
      }

      document.querySelector(".testbutton").innerHTML="ROLL";
}


// Begins Here

document.querySelector(".changeName").onclick= function(){
  document.querySelector(".player1").innerHTML=prompt("Enter name of Player 1 :");
  document.querySelector(".player2").innerHTML=prompt("Enter name of Player 2 :");
  document.querySelector(".changeName").style.display="none";
}

// Clicking the button
var count=0;
document.querySelector(".testbutton").onclick= function(){

  count++;

  // Dice Rolling
  if (count%2===0) {
        rollDiceInvisible();
  } else {
     rollDiceVisible();
  }

}
