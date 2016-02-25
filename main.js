'use strict';
var currentPlayer = "X";
var xPlayerArray = [];
var oPlayerArray = [];
var winningBoxes = [["box1", "box2", "box3"], ["box4", "box5", "box6"], ["box7", "box8", "box9"], ["box1", "box4", "box7"], ["box2", "box5", "box8"], ["box3", "box6", "box9"], ["box1", "box5", "box9"], ["box3", "box5", "box7"]];

document.addEventListener('DOMContentLoaded', init);
function init() {
	var boxes = document.getElementsByClassName('box');
  var currentPlayersTurn = document.getElementById('playersTurn');
  currentPlayersTurn.innerHTML = "Your turn Player " + currentPlayer + ":";

	for (var i = 0; i < boxes.length; i++) {
		boxes[i].addEventListener('click', function(e){ 
      var tdElement = e.target;
      if(currentPlayer === "X"){
        xPlayerArray.push(e.target.id);
        tdElement.innerHTML = currentPlayer;
        currentPlayer = "O";
        currentPlayersTurn.innerHTML = "Your turn Player " + currentPlayer + ":";
      } else {
        oPlayerArray.push(e.target.id);
        tdElement.innerHTML = currentPlayer;
        currentPlayer = "X";
        currentPlayersTurn.innerHTML = "Your turn Player " + currentPlayer + ":";
      }
      e.target.classList.add('noMoreClicks');
      if(gameWon(xPlayerArray)){
        console.log('x player, you won!');
      }
      if(gameWon(oPlayerArray)){
        console.log('o player, you won!');
      }
    });
	}
  document.getElementById('resetGame').addEventListener('click', function(){
    var boxes1 = document.getElementsByClassName('box');
    for(var k = 0; k < boxes1.length; k++){
      boxes1[k].innerHTML = "";
      boxes1[k].classList.remove("noMoreClicks");
    }
    xPlayerArray = [];
    oPlayerArray = [];
    currentPlayer = "X";
  });
}
  
function gameWon(playerArray) {
  for (var j = 0; j < winningBoxes.length; j++){
    console.log('winningBoxes[j]: ', winningBoxes[j]);
    console.log('playerArray: ', playerArray);
    playerArray.sort();
    if(playerArray.length === 3){
      playerArray.forEach(function(element){
        console.log('a: ' + element);
      });
    }
    
  }
}

