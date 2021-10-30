vid="";
status="";

function preload() {
    vid=createVideo('video.mp4');
    vid.hide();
}

function setup() {
   canvas = createCanvas(480, 380);
    canvas.center();
  }
  
  function draw() {
   image(vid,0,0, 480, 380);
  }

function st(){
 objd=ml5.objectDetector('cocossd',moadelloaded());
 document.getElementById("sd").innerHTML ="Status: Detecting Objects";
}

function moadelloaded(){
    console.log("modlod");
    status=true;
    vid.loop();
    vid.speed(1);
    vid.volume(0);
}