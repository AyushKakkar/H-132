function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Object";
}

img = "";
status="";

function preload(){
    img = loadImage('dog_cat.jpg');
}

function draw()
{
    image(img, 0, 0, 640, 420);
    fill("#ff1100");
    text("Dog", 50, 55);
    noFill();
    stroke("#FF0000");
    rect(30, 60, 400, 350);
    
    fill("#ff1100");
    text("Cat", 320, 75);
    noFill();
    stroke("#FF0000");
    rect(300, 80, 320, 320);
}

function modelLoaded(){
    console.log("Model Loaded!!")
    status = true;
        objectDetector.detect(img, gotResult);
}

function gotResult(error, results){
    if(error){
        console.log(error);
    }
    console.log(results);
}