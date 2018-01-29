let game=undefined;
let timer=undefined;

const startGame=function(){
  let startButton=document.getElementById('startButton');
  let restartButton=document.getElementById('restartButton');
  let hintButton=document.getElementById('hint');
  let optionButton=document.getElementById('optionButton');

  changeVisibility(restartButton,'hidden');
  startButton.onclick=(event)=>{startButtonAction(startButton,restartButton)};
  hintButton.onclick=(event)=>{hintButtonAction(hintButton)};
  restartButton.onclick=(event)=>{location.reload()};
  optionButton.onclick=(event)=>{optionButtonAction()};
};

const optionButtonAction=function(){
  let optionBlock=document.getElementById('optionBlock');
  if(optionBlock.style.visibility=='visible')
    changeVisibility(optionBlock,'hidden');
  else
    changeVisibility(optionBlock,'visible');
};

const startButtonAction=function(startButton,restartButton){
  game=new Game(30);
  timer = setInterval(function(){ startTimer() },1000);
  let tableBlock = document.getElementById('tableBlock');

  changeVisibility(startButton,'hidden');
  changeVisibility(restartButton,'visible');
};

const drawTableAndCheckClick=function(tableBlock){
  drawTable(tableBlock);
  verifyClick(table);
}

const verifyClick=function(table){
  let randomCellId=game.getOddCellId();
  let scoreBlock=document.getElementById('scoreValue');

  table.onclick=(event)=>{
    game.incrementScore();
    cellId=0;
    if(event.target.id!=randomCellId || score==31 ){
      gameOverAction(randomCellId);
      return;
    }
    game.incrementGridSize();
    showUpdatedScore(game.getScore());
    document.getElementById('grid').remove();
    drawTable(tableBlock);
  }
};

// const performClickAction=function(cellId){
//   if(isClickOnRightCell(cellId)){
//     getCorrectClickAction();
//   }
//   else getGameOverAction();
// };
//
// const startTimer=function(){
//   let countDown=game.getRemainingTime();
//   if(countDown>=0){
//     showRemainingTime(countDown);
//     game.decrementTimer();
//   }
//   else getGameOverAction();
// };
//
// const isClickOnRightCell=function(cellId){
//   return game.getColorName() == getCellColor(cellId);
// };
//
// const getCorrectClickAction=function(){
//   game.incrementScore();
//   showUpdatedScore(game.getScore());
//   changeColor();
// };
//
// const getGameOverAction=function(){
//   showGameOverMessage();
//   clearInterval(timer);
// };
//
// window.onload=startGame;
