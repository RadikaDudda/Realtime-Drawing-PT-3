function setup() 
{
    video = createCapture(VIDEO);
    video.size(550,500)

    canvas = createCanvas(550,550);
    canvas.position(560,510)

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw() 
{
    background('#FFCAED');
}

function modelLoaded() 
{
    console.log('PoseNet is Initialized!!');
}

noseX = 0;
noseY = 0;
distance = 0;
rightWristX = 0;
leftWristX = 0;

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX + "noseY = " + noseY);
   
        leftWristX = results[0].pose.leftWrist.x;
        leftWristR = results[0].pose.rightWrist.x;
        distance = floor(leftWristX - rightWrist);

        console.log("leftWristX =" + leftWristX + "rightWristX =" + rightWristX + "distance = " + difference);
    }
}

function draw() {
    background('#FFDBE9');

    document.getElementById("square_side").innerHTML = "Width And Height of a Square will be = " + difference + "px";
    fill('#FF0066');
    stroke('#00FF99');
    square(noseX, noseY, difference);
}