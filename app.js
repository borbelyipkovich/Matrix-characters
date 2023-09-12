console.log("Hello, world!")

var AllChars = [];
for (var i=97; i<123; i++)
    AllChars.push(String.fromCharCode(i));



var size = 200;
var counter = 0;

const shuffle = (array) => { 
  return array.sort(() => Math.random() - 0.5); 
}; 

var shuffledAllchars = shuffle(AllChars);

function shuffled(array){
  return shuffle(array)
}
var column = [];
var goal = column;

for (var i = 0;i<AllChars.length + size ;i++){ 
  column[i] = Math.floor(Math.random()*25 + 1)}

goal = [...column]


var fps = 1;

function button(){
  for (var i = 0;i<AllChars.length;i++){ 
  column[i] = Math.floor(Math.random()*25 + 1)}
}

function check(column,goal,index){
  if(column[index]<goal[index]){
    column[index] +=1
  }

  else if(column[index]>goal[index]){
    column[index] -= 1
  }

  else if(column[index]===goal[index]){
    goal[index] = Math.floor(Math.random()*25 + 1)
  }
}

function draw() {
  
    const canvas = document.getElementById("canvas")
    const ctx = canvas.getContext("2d")
    ctx.font = "12px serif";
    

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i<AllChars.length + size;i ++){
      check(column,goal,i)
      
      for(var j = 0; j<column[i];j++){
        ctx.fillStyle = "rgb(21, 94, 21)"
        ctx.fillText(String(shuffled(AllChars)[j]), i * 19, j * 20 + 10);
      }                
    }
    console.log(column)
    console.log(goal)
    setTimeout(() => {
      requestAnimationFrame(draw);
    }, 1000/24);
}
draw()