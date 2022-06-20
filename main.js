noseX=0;
noseY=0;
rightWristX=0;
leftWristX=0;
difference=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(500, 500);
    
    canvas=createCanvas(500, 500);
    canvas.position(600, 90);

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    background('#d49292');
    document.getElementById("squre-size").innerHTML="The height and width of squre will be " + difference + "px";
    fill('#F90093');
    stroke('#F90093');
    square(noseX, noseY, difference);
}

function modelLoaded(){
    console.log("model is loaded yay!! ");
}

function gotPoses(results){
    if (results.length > 0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        rightWristX=results[0].pose.rightWrist.x;
        leftWristX=results[0].pose.leftWrist.x;

        difference=floor(leftWristX - rightWristX);

        console.log("nose x is "+noseX+", nose y is "+noseY);
        console.log("Right wrist x is "+rightWristX+", Left wrist y is "+leftWristX+", difference = "+difference);
    }
}