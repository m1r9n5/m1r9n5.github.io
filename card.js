// Happy Birthday Thomas!! //

let thomasImage1;
let thomasImage2;
let thomasImage3;
let thomasAudio;
let polkaMusic;
let message = "";

function preload() {
    thomasImage1 = loadImage("thomas1.png");
    thomasImage2 = loadImage("thomas2.png");
    thomasImage3 = loadImage("thomas3.png");
    thomasAudio = loadSound("thomas-song.mp3");
    polkaMusic = loadSound("pee-weepolka.mp3");

}

function setup() {
    createCanvas(1500, 1500);
    background('#E4CCFF');
    image(thomasImage1, 100, 500);
    image(thomasImage2, 0, 950);
    image(thomasImage3, 700, 150);
    textSize(50);
    fill('#1E1E1E');
    textAlign(CENTER);
    text("Happy Birthday Thomas! Click to hear a surprise!", width / 2, 100);
}

function draw() {
    fill('#66517E');
    textAlign(RIGHT)
    text(message, width - 775, height - 1200);
}

function mousePressed() {
    polkaMusic.play();
    
}

function keyPressed() {
    if (key === 't') {
        thomasAudio.play();
    }
    if (key === 'a') {
        thomasAudio.stop();
    }
    if (key === ' ') {
        message = "Wishing you the best day ever!";
    }
}