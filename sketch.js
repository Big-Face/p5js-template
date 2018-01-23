var rusheaSlider, godelSlider, bobbiSlider;


function setup(){
    createCanvas(600,400);
    background(0);
    
    //createSlider(min, max, default)
    rusheaSlider = createSlider(0, 255, 225);
    rusheaSlider.position(20,20);
    
    godelSlider = createSlider(0, 255, 225);
    godelSlider.position(20,50);
    
    bobbiSlider = createSlider(0, 255, 225);
    bobbiSlider.position(20,80);
}

function draw(){
    redValue = rusheaSlider.value();
    grenValue = godelSlider.value();
    blueValue = bobbiSlider. value();
    background(redValue, grenValue,blueValue);
}