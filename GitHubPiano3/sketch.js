function setup() {
  // put setup code here  
   createCanvas(innerWidth, innerHeight*2); 
    background(150);
}



function draw() {
  noLoop();  
  
  for(let x = 0; x < 2; x ++){  
for(let r = 0; r < 7; r++){
     fill('white');
    rect(30 + r*30 + x*210, 30, 30, 135, 0, 0, 5, 5);
    
    if(r == 3 | r == 0){
       
}
    else {
         fill('black');
         rect(20 + r*30 + x*210, 20, 20, 100, 0, 0, 5, 5)
            }  
        }
    }
}