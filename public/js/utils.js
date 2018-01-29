const getAColorSet=function(index){
  let color={
    '1':['rgb(237, 19, 19)','rgb(215, 20, 19)'],
    '2':['rgb(60, 200, 49)','rgb(0, 171, 49)'],
    '3':['rgb(51, 89, 222)','rgb(75, 83, 250)'],
    '4':['rgb(246, 198, 30)','rgb(242, 211, 46)'],
    '5':['rgb(245, 109, 11)','rgb(225, 109, 58)'],
    '6':['rgb(37, 186, 203)','rgb(90, 206, 220)'],
    '7':['rgb(38, 254, 168)','rgb(38, 220, 168)'],
    '8':['rgb(156, 109, 191)','rgb(139, 109, 191)'],
    '9':['rgb(129, 124, 122)','rgb(140, 124, 122)'],
    '10':['rgb(231, 120, 180)','rgb(215, 90, 180)'],
    '11':['rgb(215, 20, 19)','rgb(237, 19, 19)'],
    '12':['rgb(0, 171, 49)','rgb(60, 200, 49)'],
    '13':['rgb(75, 83, 250)','rgb(51, 89, 222)'],
    '14':['rgb(242, 211, 46)','rgb(246, 198, 30)'],
    '15':['rgb(225, 109, 58)','rgb(245, 109, 11)'],
    '16':['rgb(90, 206, 220)','rgb(37, 186, 203)'],
    '17':['rgb(38, 220, 168)','rgb(38, 254, 168)'],
    '18':['rgb(139, 109, 191)','rgb(156, 109, 191)'],
    '19':['rgb(140, 124, 122)','rgb(129, 124, 122)'],
    '20':['rgb(215, 90, 180)','rgb(231, 120, 180)']
  };
  return color[index];
};

const getRandomColor=function(){
  let colorIndex=Math.ceil(Math.random()*20);
  let color=getAColorSet(colorIndex);
  return color;
};

const blink=function(id){
  let oldColor=document.getElementById(id).style['background-color'];
  setInterval(function(){
    document.getElementById(id).style['background-color']='rgba(255, 255, 255, 0.19)';
    setTimeout(function(){
      document.getElementById(id).style['background-color']=oldColor;
    },500);
  },1000);
}
