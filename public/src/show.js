let cellId=0;
const drawTable=function(game,tableBlock){
  let table =document.createElement('table');
  let gridSize=game.getGridSize(4);
  let randomColor=getRandomColor();

  table.id='grid';
  table.style['border-collapse']='collapse';
  table.style.height='350px';
  table.style.width='350px';
  table.style['background-color']=randomColor[0];

  drawGrid(gridSize,table);
  tableBlock.appendChild(table);

  let randomNum=Math.ceil(Math.random()*(gridSize*gridSize-1));
  game.updateOddCellId(randomNum);
  let randomCellId=game.getOddCellId();
  let randomCell=document.getElementById(randomCellId);
  randomCell.style['background-color']=randomColor[1];
};

const drawGrid=function(size,table){
  for(let rows = 0; rows < size; rows++) {
    generateRows(table,size);
  }
  cellId=0;
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

const getCellSize=function(size){
  return 350/size;
};

const changeVisibility=function(item,itemVisibility){
  item.style.visibility=itemVisibility;
};

const blink=function(id){
  let oldColor=document.getElementById(id).style['background-color'];
  setInterval(function(){
    document.getElementById(id).style['background-color']='rgba(255, 255, 255, 0.19)';
    setTimeout(function(){
      document.getElementById(id).style['background-color']=oldColor;
    },500);
  },1000);
};

const showStatistics=function(){
  let score=document.getElementById('scoreValue').innerText;
  document.getElementById('overlay').innerHTML=getStatistics(score);
  document.getElementById('overlay').style.visibility='visible';
  setTimeout(function(){
    document.getElementById('overlay').style.visibility='hidden';
  },3000);
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
};

const showUpdatedScore=function(score){
  document.getElementById('scoreValue').innerText = score;
};

const showRemainingTime=function(countDown){
  document.getElementById("timerBlock").innerText = countDown;
};

const showGameOverMessage=function(){

  let displayColor=document.getElementById('colorName');
  let startButton=document.getElementById('startButton');
  let grid = document.getElementById('grid');

  displayColor.innerText='Game Over';
  displayColor.style.color='grey';
  displayColor.style.animation='fadeIn 3s';
  startButton.style.visibility='hidden';

  grid.onclick=(event)=>{displayColor.innerText='Game Over'};
};
