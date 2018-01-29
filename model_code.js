const Game = function() {
  this.list = []
};

Game.prototype.setTable = function(limit) {
  let emptyList = new Array(limit).fill('*');
  let count = 0;
  this.list = emptyList.map(function(element) {
    element = ++count;
    if (count == limit / 2)
      count = 0;
    return element;
  });
  return this.shuffle(this.list);
};

Game.prototype.shuffle = function(list) {
  for (index = 0; index < list.length; index++) {
    let randomPos = Math.floor(Math.random() * list.length);
    temp = list[index];
    list[index] = list[randomPos];
    list[randomPos] = temp;
  };
  return list;
};




//*********************--------------------*******************/


let game = new Game();
let cellIdCounter = 1;
let turn = 1;
let prevClick = '';
let prevPos = '';
let size = 4;
let moves = [];
let timer = 0;
let countDown = size * size * 2;

const generateTable = function(size) {
  let table = document.getElementById('grid');
  for (let rowCounter = 0; rowCounter < size; rowCounter++) {
    generateRows(table);
  };
  return table;
};

let generateRows = function(table) {
  let row = document.createElement('tr');
  for (let colCounter = 0; colCounter < size; colCounter++) {
    let cell = document.createElement('td');
    cell.id = cellIdCounter++;
    row.appendChild(cell);
  }
  table.appendChild(row);
};

let openCell = function() {
  showContent(game.list);
  setTimeout(function() {
    let cells = document.getElementById("grid");
    cells.addEventListener('click', reactOnClick);
  }, size * 1000);
};

let reactOnClick = function() {
  let cellId = event.target.id;
  if (!isNaN(+cellId)) {
    isCorrect(cellId);
  }
};

let setTimer = function() {
  clearInterval(timer);
  timer = setInterval(function() {
    startTimer()
  }, 1000);
}

let startTimer = function() {
  if (countDown >= 0 && turn <= size * size) {
    document.getElementById("timerBlock").innerHTML = countDown;
    countDown--;
  } else
    gameOverAction()
};

let gameOverAction = function() {
  let cells = document.getElementById("grid");
  cells.removeEventListener('click', reactOnClick);
  document.getElementById('restart').style.visibility='visible';
  showMessage();
}

let showMessage = function() {
  if (moves.length == size * size) {
    document.getElementById("timerBlock").innerHTML = "You won!";
    return;
  }
  document.getElementById("timerBlock").innerHTML = "You Loose!";
};

let isCorrect = function(cellId) {
  let number = game.list[+cellId - 1];
  if (prevClick == '' && !moves.includes(cellId)) {
    registerNumber(number, cellId);
  } else if (number == prevClick && prevPos != cellId) {
    prevClick = '';
    updateOnCell(cellId, number);
  } else if (!moves.includes(cellId) && prevClick != '') {
    document.getElementById(cellId).innerText = number;
    blink(cellId);
  }
};

let registerNumber = function(number, cellId) {
  prevClick = number;
  prevPos = cellId;
  updateOnCell(cellId, number);
};

let updateOnCell = function(cellId, number) {
  document.getElementById(cellId).innerText = number;
  turn++;
  moves.push(cellId);
}

let blink = function(cellId) {
  setTimeout(function() {
    document.getElementById(cellId).innerText = '';
  }, 100);
}

let showContent = function(list) {
  for (var i = 1; i < list.length + 1; i++) {
    document.getElementById(i).innerText = list[i - 1];
  }
  setTimeout(function() {
    resetTable(list);
  }, size * 1000);
};

let resetTable = function(list) {
  for (var i = 1; i < list.length + 1; i++) {
    document.getElementById(i).innerText = '';
  }
};

let hideStartButton = function () {
  document.getElementById('start').style.visibility='hidden';
};

let refreshPage = function () {
  window.location.reload();
};

const start = function() {
  hideStartButton();
  game.setTable(size * size);
  generateTable(size);
  setTimer();
  openCell();
};

// let start= new NumberFinder(5)
// console.log(start.generateTable());
