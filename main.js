lipX=0;
lipY=0;

function preload() {
lipstick = loadImage('https://i.postimg.cc/PxFvYgkv/l1.png')
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        lipX= results[0].pose.nose.x;
        lipY= results[0].pose.nose.y;
        console.log("lip x = " + results[0].pose.nose.x);
        console.log("lip y = " + results[0].pose.nose.y);
    }
}

function modelLoaded(){
    console.log('PoseNet Is Initialized');
}

function draw(){
image(video, 10, -5, 300, 300);
image(lipstick, lipX, lipY, 30, 30);
}

function take_snapshot(){
    save('myFilterImage.png');
}