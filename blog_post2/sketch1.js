//@author Edencio Wilcher

var t;
var song;
var button;
var amp;
var fillColor;
var backColor;
let fft;
let audio;
let bezierControlPoints;

function setup() {

  //put WEBGL in 3rd parameter if you want cubes to work
  cnv = createCanvas(1000, 1000);
  //background(0);

  cnv.center();
  backColor = color(0,0,150);
  background(backColor);

  //song = loadSound("rdtdtdtdtddtatttnnnnunnnnnnnnmmmmmmmmmmm2.mp3", loaded);
  input = createFileInput(handleFile);


  amp = new p5.Amplitude();
  var vol2 = amp.getLevel() * 1.5;
  fillColor = color(100, 50, 150);


  fft = new p5.FFT(0.00001);

  //noFill();
  t = 0;

  colorMode(HSB, 100);

  bezierControlPoints = [    
    [100, 100],
    [200, 150],
    [300, 100],
    [400, 150]
  ];
}

function handleFile(file) {

song = loadSound(file, loaded);

//sound.play();
}


function loaded() {
  button = createButton("play");
  button.size(200,100);
  button.position(0,150);
  button.center('horizontal');
  button.mousePressed(togglePlaying);
}
function togglePlaying() {
  if (song.isPlaying()) {
    song.pause();
    song.setVolume(0.3);

    button.html("play");
  } else {
    song.loop();
    background(backColor);
    button.html("pause");

  }
}

function draw() {
  //song.isPlaying()
	if(true){


    // let spectrum = fft.analyze();
    // //noStroke();
    // fill(255, 0, 255);
    // for (let i = 0; i< spectrum.length; i++){
    //   let x = map(i, 0, spectrum.length, 0, width);
    //   let h = -height + map(spectrum[i], 0, 255, height, 0);
    //   rect(x, height, width / spectrum.length, h )
    // }
    
    
      // analyze frequency spectrum and manipulate bezier curve


    let spectrum = fft.analyze();
    let lowFreqAmplitudes = spectrum.slice(0, 8);

    bezierControlPoints[0][0] = width * noise(t + 15); // x position
    bezierControlPoints[0][1] = height * noise(t + 25) ; // y position
    bezierControlPoints[1][0] = width * noise(lowFreqAmplitudes[2]*0.005 + 35) ;
    bezierControlPoints[1][1] = height * noise(lowFreqAmplitudes[3]*0.005 + 45) ;
    bezierControlPoints[2][0] = width * noise(lowFreqAmplitudes[4]*0.005 + 55) ;
    bezierControlPoints[2][1] = height * noise(lowFreqAmplitudes[5]*0.005 + 65) ;
    bezierControlPoints[3][0] = width * noise(t + 75) ;
    bezierControlPoints[3][1] = height * noise(t + 85) ;

    bezier(
        bezierControlPoints[0][0], bezierControlPoints[0][1],
        bezierControlPoints[1][0], bezierControlPoints[1][1],
        bezierControlPoints[2][0], bezierControlPoints[2][1],
        bezierControlPoints[3][0], bezierControlPoints[3][1]
      );

    /*for (let i = 0; i < lowFreqAmplitudes.length; i++) {
      let amplitude = lowFreqAmplitudes[i];

      let x = map(i, 0, spectrum.length, 0, width);
      let h = -height + map(spectrum[i], 0, 255, height, 0);

      // use amplitude to control x and y position of control point i

      bezierControlPoints[0][0] = 100 ; // x position
      bezierControlPoints[0][1] = 100 ; // y position
      bezierControlPoints[1][0] = 100 ;
      bezierControlPoints[1][1] = 100 ;
      bezierControlPoints[2][0] = 100 ;
      bezierControlPoints[2][1] = 100 ;
      bezierControlPoints[3][0] = 100 ;
      bezierControlPoints[3][1] = 100 ;




      bezierControlPoints[0][0] = (width/spectrum.length) + (amplitude * 0.5); // x position
      bezierControlPoints[0][1] = height + (amplitude * 0.6); // y position
      bezierControlPoints[1][0] = (width/spectrum.length) + (amplitude * 0.7);
      bezierControlPoints[1][1] = height + (amplitude * 0.3);
      bezierControlPoints[2][0] = (width/spectrum.length) + (amplitude * 0.2);
      bezierControlPoints[2][1] = height + (amplitude * 0.1);
      bezierControlPoints[3][0] = (width/spectrum.length) + (amplitude * 0.9);
      bezierControlPoints[3][1] = height + (amplitude * 0.8);

       bezier(
        bezierControlPoints[0][0], bezierControlPoints[0][1],
        bezierControlPoints[1][0], bezierControlPoints[1][1],
        bezierControlPoints[2][0], bezierControlPoints[2][1],
        bezierControlPoints[3][0], bezierControlPoints[3][1]
      );

    }*/

    // draw bezier curve using manipulated control points
  







		// background(0);
    //vol shit to uncomment
		var vol = amp.getLevel();

		//strokeWeight(5);
		//stroke(color(0,0,0));
    //noStroke();

    //text('volume value :' + vol, 20, 30);
		
		

		//fillColor.setAlpha(128 + 128 * sin(millis() / 1000));

    //fill color shit to uncomment
    //fillColor.setAlpha(10+ 200*sin(millis() / 1000));
		//fillColor.setGreen(150 + map(vol, 0, 0.19, 0,105, true));
    

    /*fillColor.setGreen(255 * sin(millis() / 1000));
		fillColor.setRed(255 * sin(millis() / 1000) * (0.5 * cos(millis() / 1000)));
		fillColor.setBlue(255 * cos(millis() / 1000));
		fill(fillColor);
*/
    // map amplitude of frequencies to a range of hue values
     let hue = 50 + 50 * sin(millis()/1000);
     let alph = 50+ 50 * sin(millis()/100);
     // fill bezier curve with color using mapped hue value
     fill(hue, 80, 80, alph);
    //text(hue);
    let millisecond = millis();
    text('Milliseconds \nrunning: \n' +hue, 5, 40);

    // backColor.setGreen(20 + 44 * sin(millis() / 100));
    // backColor.setRed(200 - map(vol, 0, 0.19, 0,200, true));
    // backColor.setBlue(map(vol, 0, 0.19, 0,255, true));
    // background(backColor);
		
		
		
      //other shit to uncomment i guess
		  var x1 = width * noise(t + 15);
  		var x2 = width * noise(t + 25);
  		var x3 = width * noise(t + 35);
  		var x4 = width * noise(t + 45);
  		var y1 = height * noise(t + 55);
  		var y2 = height * noise(t + 65);
  		var y3 = height * noise(t + 75);
 		  var y4 = height * noise(t + 85);

  		//bezier(x1+200, y1+200, x2+200, y2+200, x3+200, y3+200, x4+200, y4+200);

      /*bezier(-x1+800, y1+200, -x2+800, y2+200, -x3+800, y3+200, -x4+800, y4+200);

      bezier(y1+200, x1+200, y2+200, x2+200, y3+200, x3+200, y4+200, x4+200);
      bezier(-y1+800, x1+200, -y2+800, x2+200, -y3+800, x3+200, -y4+800, x4+200);


      bezier(x1+200, -y1+800, x2+200, -y2+800, x3+200, -y3+800, x4+200, -y4+800);
      bezier(-x1+800, -y1+800, -x2+800, -y2+800, -x3+800, -y3+800, -x4+800, -y4+800);
      
      bezier(y1+200, -x1+800, y2+200, -x2+800, y3+200, -x3+800, y4+200, -x4+800);
      bezier(-y1+800, -x1+800, -y2+800, -x2+800, -y3+800, -x3+800, -y4+800, -x4+800);
*/




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