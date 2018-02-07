class Game{
  constructor(countDownTime){
    this.countDown=countDownTime;
    this.timer=undefined;
    this.score=0;
    this.oddCellId=undefined;
    this.gridSize=2;
  }
  getOddCellId(){
    return this.oddCellId;
  }
  updateOddCellId(cellId){
    this.oddCellId=cellId;
  }
  getGridSize(size){
    return this.gridSize;
  }
  incrementGridSize(){
    return this.gridSize++;
  };
  getRemainingTime(){
    return this.countDown;
  }
  getScore(){
    return this.score;
  }
  incrementScore(){
    this.score++;
  }
  decrementTimer(){
    this.countDown--;
  }
  isGameOver(){
    return true;
  }
};
