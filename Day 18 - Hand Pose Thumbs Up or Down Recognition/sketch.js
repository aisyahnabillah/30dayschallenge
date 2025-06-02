let video;
let handPose;
let hands = [];

function preload() {
  handPose = ml5.handPose({ flipped: true });
}

function mousePressed() {
  console.log(hands);
}

function gotHands(results) {
  hands = results;
}

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO, { flipped: true });
  video.hide();

  handPose.detectStart(video, gotHands);
}

function draw() {
  image(video, 0, 0);

  if (hands.length > 0) {
    let hand = hands[0];
    let index = hand.index_finger_tip;
    let thumb = hand.thumb_tip;

    textSize(128);
    textAlign(CENTER, CENTER);

    if (thumb.y < index.y) {
      text("👍", index.x, index.y);
    } else {
      text("👎", index.x, index.y);
    }
  }
}