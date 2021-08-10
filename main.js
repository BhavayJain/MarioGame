function preload() {
	world_start = loadSound("world_start.wav");
  mario_jump= loadSound("jump.wav");
  mario_coin= loadSound("coin.wav");
  mario_gameover= loadSound("gameover.wav");
  mario_die =loadSound("mariodie.wav");
  mario_kick =loadSound("kick.wav");
	setSprites();
	MarioAnimation();
}



function draw() {
	game();

	}



img = "";
noseX = 0;
noseY = 0;
marioX = 325;
marioY = 325;


function setup() {
  canvas =createCanvas(1240,336);
  video = createCapture(VIDEO);
  video.size(800, 400);
  canvas.parent('canvas');
  instializeInSetup(mario);
   
  poseNet=ml5.poseNet(video, modelLoaded);
  poseNet.on('pose',gotPoses);
  video.parent('game_console');
}

function draw() {
game();
}

function modelLoaded(){
  console.log("modelLoaded");
}

function gotPoses(results){
  if(results.length > 0){
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    console.log(noseX,noseY);
  }
  
    
  
}






