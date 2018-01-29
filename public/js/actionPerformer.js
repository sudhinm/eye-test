let timer;
let score,cellId=0;
let gridSize=2;
let countDown=30;
let randomCellId;

const startGame=function(){
  let startButton=document.getElementById('startButton');
  let restartButton=document.getElementById('restartButton');
  let hintButton=document.getElementById('hint');
  let optionButton=document.getElementById('optionButton');

  restartButton.style.visibility='hidden';
  startButton.onclick=(event)=>{startButtonAction(startButton,restartButton)};
  hintButton.onclick=(event)=>{hintButtonAction(hintButton)};
  restartButton.onclick=(event)=>{location.reload()};
  optionButton.onclick=(event)=>{optionButtonAction()};
};

const optionButtonAction=function(){
  let optionBlock=document.getElementById('optionBlock');
  if(optionBlock.style.visibility=='visible')
    optionBlock.style.visibility='hidden';
  else
    optionBlock.style.visibility='visible';
}

const startButtonAction=function(startButton,restartButton){
  score=0;
  startButton.style.visibility='hidden';
  restartButton.style.visibility='visible';
  timer = setInterval(function(){ startTimer() },1000);
  let tableBlock = document.getElementById('tableBlock');
  createTable(tableBlock);

};

const createTable=function(tableBlock){
  let table =document.createElement('table');
  table.id='grid';
  table.style['border-collapse']='collapse';
  table.style.height='350px';
  table.style.width='350px';
  drawGrid(gridSize,table);
  tableBlock.appendChild(table);
  let randomColor=getRandomColor();
  table.style['background-color']=randomColor[0];
  randomCellId=`${Math.ceil(Math.random()*(gridSize*gridSize-1))}`;
  let randomCell=document.getElementById(randomCellId);
  randomCell.style['background-color']=randomColor[1];
  verifyClick(table,randomCellId);
}

const drawGrid=function(size,table){
  for(let rows = 0; rows < size; rows++) {
    generateRows(table,size);
  }
};

const generateRows = function(table,colSize) {
  let row = document.createElement('tr');
  let cellSize=getCellSize(colSize);
  for (let columns = 0; columns < colSize; columns++) {
    let cell = document.createElement('td');
    cell.id = cellId;
    cell.style.height =`${cellSize}px`;
    cell.style.width =`${cellSize}px`;
    row.appendChild(cell);
    cellId++;
  }
  table.appendChild(row);
};

const verifyClick=function(table,randomCellId){
  let scoreBlock=document.getElementById('scoreValue');
  table.onclick=(event)=>{
    score++;
    cellId=0;
    if(event.target.id!=randomCellId || score==31 ){
      gameOverAction(randomCellId);
      return;
    }
    gridSize++;
    scoreBlock.innerText=score;
    document.getElementById('grid').remove();
    createTable(tableBlock);
  }
};

const getCellSize=function(size){
  return 350/size;
};

const hintButtonAction=function(hintButton){
  let hintContent=document.getElementById('hintContent');
  hintContent.innerHTML=`<span style="color:rgb(45, 131, 245);font-size:40px">Instructions</span><br>Click on the odd color block. 30 seconds is the time limit!<br>~~~Good Luck~~~`;
  hintContent.style.visibility="visible";
  setTimeout(function(){
    hintContent.style.visibility="hidden";
  },6000);
};

const startTimer=function(){
  if(countDown>=0){
    document.getElementById("timerBlock").innerHTML = countDown;
    countDown--;
  }else{
    gameOverAction(randomCellId);
  }
};

const getStatistics=function(score){
  let rating;
  if(score>24)return getRating('Super talented',5,score);
  if(score>19)return getRating('Excellent',4,score);
  if(score>14)return getRating('Very Good',3,score);
  if(score>9)return getRating('Good',2,score);
  if(score>4) return getRating('Average',1,score);
  else return getRating('Blind',0,score);
};

const getRating=function(text,stars,score){
  let rating=`<br><br>${text}<br>`;
  for(let iter=0;iter<stars;iter++){
    rating+=`<img id='stars' src="./img/rated.png">`;
  }
  for(let iter=stars;iter<4;iter++){
    rating+=`<img id='stars' src="./img/unrated.png">`;
  }
  return `${rating}<br>${score}`;
}

const showStatistics=function(){
  let score=document.getElementById('scoreValue').innerText;
  document.getElementById('overlay').innerHTML=getStatistics(score);
  document.getElementById('overlay').style.visibility='visible';
  setTimeout(function(){
    document.getElementById('overlay').style.visibility='hidden';
  },3000);
}

const gameOverAction=function(id){
  let grid=document.getElementById('grid');
  let displayColor=document.getElementById('colorName');
  let startButton=document.getElementById('startButton');

  showStatistics();
  displayColor.innerText='Game Over';
  displayColor.style.color='grey';
  displayColor.style.animation='fadeIn 3s';
  startButton.style.visibility='hidden';
  blink(id);
  clearInterval(timer);
  grid.onclick=(event)=>{displayColor.innerText='Game Over'};
};

window.onload=startGame;
