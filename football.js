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
    img = loadImage('football.jpg');
}

function draw()
{
    image(img, 0, 0, 640, 420);
    fill("#ff1100");
    text("Man", 200, 95);
    noFill();
    stroke("#FF0000");
    rect(200, 100, 300, 300);

    fill("#ff1100");
    text("Football", 490, 305);
    noFill();
    stroke("#FF0000");
    rect(490, 310, 50, 50)
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