// Mountain
var c1 = function (s) {

  s.setup = function () {
    s.createCanvas(1200, 600);
    s.background("black");
    s.stroke(255, 20); //stroke(rgb, alpha= opacity of the stroke
    s.noFill();
    s.t = 0;
  };

  s.draw = function () {
    s.translate(s.width / 2, s.height / 2);
    s.beginShape();
    for (s.i = 0; s.i < s.random(10, 700); s.i++) {
      s.ang = s.map(s.i, 0, 100, 0.5, s.TWO_PI);
      s.rad = 600 * s.noise(s.i * 0.07, s.t * 0.008);
      s.x = s.rad * s.sin(s.ang) - 3.5;
      s.y = s.rad * 0.5;
      s.curveVertex(s.x, s.y);
    }
    s.endShape(s.CLOSE);

    s.t += 0.3; //time

    // reset after 500 frames
    // idea for later: change color

    if (s.frameCount % 500 == 0) {
      s.background("black");
      s.stroke(255, 20);
    }
  };
};

var myp5 = new p5(c1, "c1");


// Waves
var c2 = function (p) {
  p.resolution = 300; // how many points in the circle
  p.rad = 50;

  p.t = 0; // time passed
  p.tChange = 0.003; // how quick time flies

  p.setup = function () {
    p.createCanvas(750, 500);
    p.noiseDetail(5);
    p.noFill();
    p.stroke("#f063e9");
    p.strokeWeight(1);
  };

  p.drawRings = function () {
    p.beginShape();
    for (p.a = 0; p.a <= p.TWO_PI; p.a += p.TWO_PI / p.resolution) {
      p.nVal = p.map(
        p.noise(p.cos(p.a) * p.nInt + 1, p.sin(p.a) * p.nInt + 1, p.t),
        0,
        0.1,
        p.nAmp,
        p.u,
        false
      ); // map noise value to match the amplitude

      p.x = p.cos(p.a) * p.rad * p.nVal;
      p.y = p.sin(p.a) * p.rad * p.nVal;

      p.vertex(p.x, p.y);
    }
    p.endShape(p.CLOSE);
  };

  p.draw = function () {
    p.background("navy");
    p.translate(p.width / 2, p.height / 2);

    p.nInt = p.map(0, 0, p.width, 0.5, 10); // intensity
    p.nAmp = p.map(0, 0.8, p.height, 0.007, 0.1); // amplitude
    p.t = p.t + p.tChange;
    p.u = 0.04;

    for (p.i = 0; p.i <= 40; p.i += 1) {
      p.u += 0.05;
      p.drawRings(p.u);
    }
  };
};

myp5 = new p5(c2, "c2");


//DotsZima
var c3 = function (q) {
  var r = 0;
  var g = 200;
  var b = 255;

  q.setup = function () {
    q.createCanvas(600, 600);
    q.background("black");
  };

  //square
  q.stippleRect = function (left, top, width, height, drawDensity) {
    drawCount = ((width * height) / 5) * drawDensity;
    for (i = 0; i < drawCount; i++) {
      let x = q.random(left, left + width);
      let y = q.random(top, top + height);
      q.ellipse(x, y, 0.8, 0.8);
    }
  };

  //circledots
  q.dottedRing = function () {
    q.translate(q.width / 2, q.height / 2);
    q.beginShape();
    for (q.i = 0; q.i < 150; q.i++) {
      q.theta = q.random(0, q.TWO_PI);
      q.h = q.randomGaussian(2.9); //experiment with different means
      q.r = (q.exp(q.h) - 3) / (q.exp(q.h) + 90);
      q.x = (q.width / 1.8) * q.r * q.cos(q.theta);
      q.y = (q.height / 1.8) * q.r * q.sin(q.theta);
      q.ellipse(q.x, q.y, 0.8, 0.8);
    }
    q.endShape(q.CLOSE);
  };

  q.draw = function () {
    r = q.map(q.mouseX, 0, 600, 0, 255);
    g = q.map(q.mouseX, 0, 600, 0, 200);
    b = q.map(q.mouseY, 0, 600, 255, 0);
    q.dottedRing(q.x, q.y, 1, 1);
    q.noStroke();
    q.fill(r, g, b);

    if (q.mouseX >= 290 && q.mouseX <= 320) {
      q.noStroke();
      q.fill("#5BC2E7");
      q.stippleRect(-75, -75, 150, 150, 1);
    }
  };
};

var myp5 = new p5(c3, "c3");
