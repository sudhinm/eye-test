class Game{
  constructor(countDownTime){
    this.countDown=countDownTime;
    this.timer=undefined;
    this.score=0;
    this.oddCellId=undefined;
    this.gridSize=undefined;
  }
  getOddCellId(){
    return this.oddCellID;
  }
  updateOddCellId(cellId){
    return this.oddCellId=cellId;
  }
  getGridSize(size){
    return this.gridSize;
  }
  incrementGridSize=function(){
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
  isGameOver:function(){
    return true;
  }
};
