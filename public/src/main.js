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
  optionButton.onclick=(event)=>{menuButtonAction()};
};

const startButtonAction=function(startButton,restartButton){
  game=new Game(30);
  timer = setInterval(function(){ startTimer() },1000);
  let tableBlock = document.getElementById('tableBlock');

  changeVisibility(startButton,'hidden');
  changeVisibility(restartButton,'visible');

  drawTableAndCheckClick(game,tableBlock);
};

const drawTableAndCheckClick=function(game,tableBlock){
  drawTable(game,tableBlock);
  verifyClick();
};

const verifyClick=function(){
  let table=document.getElementById('grid');
  let scoreBlock=document.getElementById('scoreValue');
  let randomCellId=game.getOddCellId();

  table.onclick=(event)=>{
    game.incrementScore();
    if( event.target.id != randomCellId || game.getScore()==31 ){
      getGameOverAction(randomCellId);
      return;
    }
    game.incrementGridSize();
    showUpdatedScore(game.getScore());
    document.getElementById('grid').remove();
    drawTableAndCheckClick(game,tableBlock);
  }
};

const menuButtonAction=function(){
  let optionBlock=document.getElementById('optionBlock');

  if(optionBlock.style.visibility=='visible') changeVisibility(optionBlock,'hidden');
  else changeVisibility(optionBlock,'visible');
};

const startTimer=function(){
  let countDown=game.getRemainingTime();
  if(countDown>=0){
    showRemainingTime(countDown);
    game.decrementTimer();
  }
  else getGameOverAction();
};

const getGameOverAction=function(){
  showStatistics();
  showGameOverMessage();
  blink(game.getOddCellId());
  clearInterval(timer);
};

window.onload=startGame;
