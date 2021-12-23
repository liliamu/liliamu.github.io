// Mountain
var c1 = function(s){
s.t;
s.i;
s.ang;
s.rad;
s.x;
s.y;

s.setup = function() {
  s.createCanvas(1200, 600);
  s.background("black");
  s.stroke(255, 20); //stroke(rgb, alpha= opacity of the stroke
  s.noFill();
  s.t = 0;
}

s.draw = function() {
  s.translate(s.width/2, s.height/2);
  s.beginShape();
  for (s.i = 0; s.i < s.random(10,700); s.i++) {
    s.ang = s.map(s.i, 0, 100, 0.5, s.TWO_PI);
    s.rad = 600 * s.noise(s.i * 0.07, s.t * 0.008);
    s.x = s.rad * s.sin(s.ang)-3.5;
    s.y = s.rad * 0.5;
    s.curveVertex(s.x, s.y);
  }
  s.endShape(s.CLOSE);

  s.t += 0.3; //time

 // reset after 500 frames 
 // idea for later: change color 

  if (s.frameCount %500 == 0) {
  s.background("black");
  s.stroke(255, 20);
}  
}
}

var myp5 = new p5(c1, "c1");



// Waves
var c2 = function(p) { 

p.nVal; // noise value
p.nInt // noise intensity
p.nAmp  // noise amplitude
p.resolution = 250; // how many points in the circle
p.rad = 30;
p.x;
p.y;
p.u;
p.a;
p.i;

p.t = 0; // time passed
p.tChange = 0.0030; // how quick time flies

p.setup = function() {
  p.createCanvas(750, 500 );
  p.noiseDetail(5);
  p.noFill();
  p.stroke("#f063e9");
  p.strokeWeight(1);
}

p.drawRings = function() {
  p.beginShape();
  for (p.a=0; p.a<=p.TWO_PI; p.a+=p.TWO_PI/p.resolution) {

    p.nVal = p.map(p.noise(p.cos(p.a)*p.nInt+1, p.sin(p.a)*p.nInt+1, p.t ), 0, 0.10, p.nAmp, p.u, false); // map noise value to match the amplitude

    p.x = p.cos(p.a)*p.rad *p.nVal;
    p.y = p.sin(p.a)*p.rad *p.nVal;

    p.vertex(p.x, p.y);
    
    };
  p.endShape(p.CLOSE);
};

p.draw = function(){
	p.background("navy");
  p.translate(p.width/2, p.height/2);
  
  p.nInt = p.map(0, 0, p.width, 0.5, 10); // intensity
  p.nAmp = p.map(0, 0.8, p.height, 0.007, 0.10); // amplitude
  p.t = p.t + p.tChange;
  p.u=0.04;

for (p.i=0; p.i <= 40; p.i+=1) {
  p.u +=0.05;
  p.drawRings(p.u);
};
};
};

myp5 = new p5(c2, "c2");



