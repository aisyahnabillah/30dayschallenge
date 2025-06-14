let fft;
let waveform = [];
let spectrum = [];
let smoothing = 0.9;
let bins = 512;
let r = 100;
let canvas;
let song;

function preload() {
  song = loadSound("paranoia.mp3");
}

function setup() {
  let container = document.getElementById('canvas-container');
  let containerWidth = container.offsetWidth;
  let containerHeight = container.offsetHeight;

  canvas = createCanvas(containerWidth, containerHeight);
  canvas.parent('canvas-container');
  canvas.id('tv-canvas');

  fft = new p5.FFT(smoothing, bins);
  song.play();
  song.setLoop(true);

  setupControls();

  noFill();
  strokeWeight(1.5);
}

function setupControls() {
  const playBtn = document.getElementById("play-btn");
  const volumeSlider = document.getElementById("volume-slider");

  playBtn.addEventListener("click", () => {
    if (song.isPlaying()) {
      song.pause();
      playBtn.textContent = "▶ Play";
    } else {
      song.play();
      playBtn.textContent = "⏸ Pause";
    }
  });

  volumeSlider.addEventListener("input", () => {
    const vol = parseFloat(volumeSlider.value);
    song.setVolume(vol);
  });

  // Set initial volume
  song.setVolume(parseFloat(volumeSlider.value));
}


function draw() {
  setGradient(0, 0, width, height, color(255, 240, 250), color(230, 245, 255), 'Y');

  waveform = fft.waveform();
  spectrum = fft.analyze();
  let vol = fft.getEnergy(20, 140);

  for (let i = 0; i < spectrum.length; i++) {
    let amp = spectrum[i];
    let y = map(amp, 0, 255, height, height / 2);
    let x = i * (width / bins);

    if (vol > 100) {
      stroke(255, 100, 150);
    } else {
      stroke(150, 180, 255, 150);
    }

    line(x, height, x, y);
  }

  stroke(120, 90, 220, 200);
  strokeWeight(2);
  beginShape();
  noFill();
  for (let i = 0; i < waveform.length; i++) {
    let x = map(i, 0, waveform.length, 0, width);
    let y = height / 3 + map(waveform[i], -1, 1, -r, r);
    vertex(x, y);
  }
  endShape();
  strokeWeight(1.5);
}

function windowResized() {
  let container = document.getElementById('canvas-container');
  let containerWidth = container.offsetWidth;
  let containerHeight = container.offsetHeight;
  resizeCanvas(containerWidth, containerHeight);
}

function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();
  if (axis === 'Y') {
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, y + h, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x + w, i);
    }
  }
}
