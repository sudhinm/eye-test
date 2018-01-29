const drawTable=function(tableBlock){
  let table =document.createElement('table');
  let gridSize=game.getGridSize();
  let randomColor=getRandomColor();

  table.id='grid';
  table.style['border-collapse']='collapse';
  table.style.height='350px';
  table.style.width='350px';
  table.style['background-color']=randomColor[0];

  drawGrid(gridSize,table);
  tableBlock.appendChild(table);

  let randomNum=`${Math.ceil(Math.random()*(gridSize*gridSize-1))}`;
  game.updateOddCellId(randomNum);
  let randomCellId=game.getOddCellId();
  let randomCell=document.getElementById(randomCellId);
  randomCell.style['background-color']=randomColor[1];
};

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
