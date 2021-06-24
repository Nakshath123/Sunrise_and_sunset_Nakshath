const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {

    getBackgroundImg()
}


function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}  





function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg ){
        background(backgroundImg);
        }

    Engine.update(engine);

    // write code to display time in correct format here
    

    Engine.update(engine);

    // write code to display time in correct format here


}



async function getBackgroundImg(){
    response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    var dateTime=responseJSON.datetime
    
    var hour =  dateTime.slice(11,13);
   if(hour <= 8 && hour >= 6){
       var bg = "sunrise1.png";
   }
   else if(hour <= 10 && hour >= 8){
       var bg = "sunrise2.png";
   }
   else if(hour <= 12 && hour >= 10){
       var bg = "sunrise4.png";
   }
   else if(hour <= 14 && hour >= 12){
       var bg = "sunrise5.png";
   }
   else if(hour <= 15 && hour >= 14){
       var bg = "sunset7.png";
   }
   else if(hour <= 17 && hour >= 15){
       var bg = "sunset10.png";
   }
   else if(hour <= 20 && hour >= 17){
       var bg = "sunset11.png";
   }
   else {
       var bg = "sunset12.png";
   }
   backgroundImg = loadImage(bg);
    


}





