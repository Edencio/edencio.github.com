//@author Edencio Wilcher

var t;
var song;
var button;
var amp;
var fillColor;
var backColor;

function setup() {

  //put WEBGL in 3rd parameter if you want cubes to work
  cnv = createCanvas(1000, 1000);
  //background(0);

  cnv.center();
  backColor = color(0,0,150);
  background(backColor);
  song = loadSound("lostconfidence4.mp3", loaded);
  amp = new p5.Amplitude();
  var vol2 = amp.getLevel() * 1.5;
  fillColor = color(100, 50, 150);

  //noFill();
  t = 0;
}
function loaded() {
  button = createButton("play");
  button.size(200,100);
  button.position(0,150);
  button.center('horizontal');
  button.mousePressed(togglePlaying);
}
function togglePlaying() {
  if (!song.isPlaying()) {
    song.play();
    song.setVolume(0.3);

    button.html("restart");
  } else {
    song.stop();
    background(backColor);
    button.html("play");

  }
}

function draw() {
	if(song.isPlaying()){
		// background(0);
		var vol = amp.getLevel();

		//strokeWeight(5);
		//stroke(color(0,0,0));
    //noStroke();

    //text('volume value :' + vol, 20, 30);
		
		

		// fillColor.setAlpha(128 + 128 * sin(millis() / 1000));
    fillColor.setAlpha(10+ 200*sin(millis() / 100));
		fillColor.setGreen(150 + map(vol, 0, 0.19, 0,105, true));
		fillColor.setRed(map(vol, 0, 0.19, 0,30, true));
		fillColor.setBlue(90 + 44 * sin(millis() / 1000));
		fill(fillColor);

    // backColor.setGreen(20 + 44 * sin(millis() / 100));
    // backColor.setRed(200 - map(vol, 0, 0.19, 0,200, true));
    // backColor.setBlue(map(vol, 0, 0.19, 0,255, true));
    // background(backColor);
		
		
		

		  var x1 = width * noise(t + 15);
  		var x2 = width * noise(t + 25);
  		var x3 = width * noise(t + 35);
  		var x4 = width * noise(t + 45);
  		var y1 = height * noise(t + 55);
  		var y2 = height * noise(t + 65);
  		var y3 = height * noise(t + 75);
 		  var y4 = height * noise(t + 85);

  		bezier(x1, y1, x2, y2, x3, y3, x4, y4);
      //curve(x1, y1, x2, y2, x3, y3, x4, y4);
      //quad(x1+5, y1+5, x2, y2, x3, y3, x4, y4);
      //triangle(x1, y1, x2, y2, x3, y3);
      //ellipse(x1, y1, x2, y3);

      // if (frameCount % 150 == 0) {
      //   background(color(0,0,150));
      // }

      // rotateX(noise(t));
      // rotateY(noise(t));
      // box(x1-80,x2-80,y3-80);

      // stroke(color(0,0,0));
      // box(x2-180,x1-180,y3-180);


      // cone(x1-500, y1-500);

  		t += vol * 0.3;
  		
		
	}
}



// function draw() {
// 	if(song.isPlaying()){
// 		var vol = amp.getLevel() * 15;
// 	  translate(width/2, height/2);
// 		beginShape();
// 		for (var i = 0; i < 200; i++) {
//   		var ang = map(i, 0, 200, 0, TWO_PI);
//   		var rad = 200 * noise(i * 0.01, t * 0.005) * vol;
//   		var x = rad * cos(ang);
//   		var y = rad * sin(ang);
//   		curveVertex(x, y);
// 		}
//     fillColor.setAlpha(10 + 130 * sin(millis() / 100));
//     fillColor.setGreen(150 + map(vol, 0, 0.19, 0,105, true));
//     fillColor.setRed(map(vol, 0, 0.19, 0,30, true));
//     fillColor.setBlue(90 + 44 * sin(millis() / 1000));
//     fill(fillColor);

// 		endShape(CLOSE);

// 		t += 1;
// 	}
// }




// function draw() {
// 	if(song.isPlaying()){
// 		background(0);
//   		// noStroke();
//   		//fill(240, 150, 150);

//   		fillColor.setAlpha(128 + 128 * sin(millis() / 1000));
//   		var vol = amp.getLevel();
// 		fillColor.setGreen(128 * sin(vol));
// 		fillColor.setRed(10 + 128 * sin(millis() / 1000));
// 		fillColor.setBlue(100 + 125 * sin(vol));
// 		fill(fillColor);

//   		rotateX(frameCount * 0.01);
//  		rotateY(frameCount * 0.01);
//  		var siz = 200 + 350 * sin(vol);
//   		box(siz, siz, siz);
// 	}
  	
// }