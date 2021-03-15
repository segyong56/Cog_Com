

var canvas,
  context,
  dragging = false,
  dragStartLocation,
  snapshot;


canvas = document.getElementById("canvas");
context = canvas.getContext('2d');


function getCanvasCoordinates(event) {
  var x = event.clientX - canvas.getBoundingClientRect().left,
    y = event.clientY - canvas.getBoundingClientRect().top;
  return { x: x, y: y };
}

function takeSnapshot() {
  snapshot = context.getImageData(0, 0, canvas.width, canvas.height);
}

function restoreSnapshot() {
  context.putImageData(snapshot, 0, 0);
}


function drawLine(position) {
  context.beginPath();
  context.moveTo(dragStartLocation.x, dragStartLocation.y);
  context.lineTo(position.x, position.y);
  context.stroke();
}

function dragStart(event) {
  dragging = true;
  dragStartLocation = getCanvasCoordinates(event);
  takeSnapshot();
}

function drag(event) {
  var position;
  if (dragging === true) {
    restoreSnapshot();
    position = getCanvasCoordinates(event);
    drawLine(position);
  }
}

function dragStop(event) {
  dragging = false;
  restoreSnapshot();
  var position = getCanvasCoordinates(event);
  drawLine(position);
}

function init() {
  //canvas = document.getElementById("canvas");
  //context = canvas.getContext('2d');
  context.strokeStyle = 'purple';
  context.lineWidth = 6;
  context.lineCap = 'round';

  canvas.addEventListener('mousedown', dragStart, false);
  canvas.addEventListener('mousemove', drag, false);
  canvas.addEventListener('mouseup', dragStop, false);
}

window.addEventListener('load', init, false);

init();

var data = [];
for (var z = 0; z < 4; z++) {
  for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 20; j++) {
      if (j < 10) {
        data.push({
          x: 100 + (j * 50),
          y: (50 * (i + 1)) + (600 * z)
        })
      } else {
        data.push({
          x: 650 + ((j - 10) * 50),
          y: (50 * (i + 1)) + (600 * z)
        })
      }
    }
  }
}

for (var i = 0; i < data.length; i++) {
  var d = data[i];
  context.beginPath();
  context.moveTo(d.x, d.y);
  context.arc(d.x, d.y, 7, 0, 2 * Math.PI);
  context.fillStyle = '#777';
  context.fill();
  context.closePath();
}

context.beginPath();
context.moveTo(0, 600);
context.lineTo(1200, 600);
context.strokeStyle = 'black';
context.lineWidth = 3;
context.stroke();

context.beginPath();
context.moveTo(0, 1200);
context.lineTo(1200, 1200);
context.strokeStyle = 'black';
context.lineWidth = 3;
context.stroke();

context.beginPath();
context.moveTo(0, 1800);
context.lineTo(1200, 1800);
context.strokeStyle = 'black';
context.lineWidth = 3;
context.stroke();

context.beginPath();
context.moveTo(0, 2400);
context.lineTo(1200, 2400);
context.strokeStyle = 'black';
context.lineWidth = 3;
context.stroke();


//a star
context.beginPath();
context.moveTo(300, 100);
context.lineTo(250, 250);
context.lineTo(100, 250);
context.lineTo(200, 350);
context.lineTo(150, 500);
context.lineTo(300, 400);
context.strokeStyle = 'black';
context.lineWidth = 6;
context.stroke();

//a cross
context.beginPath();
context.moveTo(875, 50);
context.lineTo(800, 50);
context.lineTo(800, 200);
context.lineTo(650, 200);
context.lineTo(650, 350);
context.lineTo(800, 350);
context.lineTo(800, 500);
context.lineTo(875, 500);
context.strokeStyle = 'black';
context.lineWidth = 6;
context.stroke();

//a tree
context.beginPath();
context.moveTo(300, 700);
context.lineTo(200, 800);
context.lineTo(250, 800);
context.lineTo(150, 900);
context.lineTo(250, 900);
context.lineTo(100, 1000);
context.lineTo(250, 1000);
context.lineTo(250, 1100);
context.lineTo(250, 1100);
context.lineTo(300, 1100);
context.strokeStyle = 'black';
context.lineWidth = 6;
context.stroke();

// X character 
context.beginPath();
context.moveTo(850, 850);
context.lineTo(750, 700);
context.lineTo(650, 700);
context.lineTo(800, 900);
context.lineTo(650, 1100);
context.lineTo(750, 1100);
context.lineTo(850, 950);
context.strokeStyle = 'black';
context.lineWidth = 6;
context.stroke();

// A character
context.beginPath();
context.moveTo(300, 1300);
context.lineTo(250, 1300);
context.lineTo(100, 1700);
context.lineTo(200, 1700);
context.lineTo(250, 1550);
context.lineTo(300, 1550);
context.strokeStyle = 'black';
context.lineWidth = 6;
context.stroke();

context.beginPath();
context.moveTo(300, 1400);
context.lineTo(250, 1500);
context.lineTo(300, 1500);
context.strokeStyle = 'black';
context.lineWidth = 6;
context.stroke();

//butterfly
context.beginPath();
context.moveTo(850, 1350);
context.lineTo(800, 1300);
context.lineTo(750, 1300);
context.lineTo(750, 1350);
context.lineTo(800, 1350);
context.strokeStyle = 'black';
context.lineWidth = 6;
context.stroke();

context.beginPath();
context.moveTo(850, 1350);
context.lineTo(800, 1400);
context.lineTo(800, 1450);
context.lineTo(750, 1400);
context.lineTo(650, 1400);
context.lineTo(650, 1450);
context.lineTo(750, 1550);
context.lineTo(650, 1650);
context.lineTo(700, 1700);
context.lineTo(800, 1650);
context.lineTo(850, 1700);
context.lineTo(850, 1350);
context.strokeStyle = 'black';
context.lineWidth = 6;
context.stroke();

context.beginPath();
context.moveTo(750, 1450);
context.lineTo(700, 1450);
context.lineTo(750, 1500);
context.lineTo(750, 1450);
context.strokeStyle = 'black';
context.lineWidth = 6;
context.stroke();

context.beginPath();
context.moveTo(750, 1600);
context.lineTo(700, 1650);
context.lineTo(750, 1650);
context.lineTo(750, 1600);
context.strokeStyle = 'black';
context.lineWidth = 6;
context.stroke();

//a face
context.beginPath();
context.moveTo(300, 1850);
context.lineTo(200, 1850);
context.lineTo(150, 1900);
context.lineTo(150, 2200);
context.lineTo(250, 2300);
context.lineTo(300, 2300);
context.strokeStyle = 'black';
context.lineWidth = 6;
context.stroke();

context.beginPath();
context.moveTo(150, 2000);
context.lineTo(100, 2000);
context.lineTo(100, 2100);
context.lineTo(150, 2100);
context.strokeStyle = 'black';
context.lineWidth = 6;
context.stroke();

context.beginPath();
context.moveTo(200, 1900);
context.lineTo(250, 1900);
context.strokeStyle = 'black';
context.lineWidth = 6;
context.stroke();

context.beginPath();
context.moveTo(200, 1950);
context.lineTo(250, 1950);
context.lineTo(250, 2000);
context.lineTo(200, 2000);
context.lineTo(200, 1950);
context.strokeStyle = 'black';
context.lineWidth = 6;
context.stroke();

context.beginPath();
context.moveTo(300, 2050);
context.lineTo(250, 2150);
context.lineTo(300, 2150);
context.strokeStyle = 'black';
context.lineWidth = 6;
context.stroke();

context.beginPath();
context.moveTo(300, 2200);
context.lineTo(250, 2200);
context.lineTo(200, 2150);
context.strokeStyle = 'black';
context.lineWidth = 6;
context.stroke();

//other 
context.beginPath();
context.moveTo(850, 1850);
context.lineTo(800, 1900);
context.lineTo(750, 1850);
context.lineTo(850, 2075);
context.lineTo(850, 1850);
context.strokeStyle = 'black';
context.lineWidth = 6;
context.stroke();

context.beginPath();
context.moveTo(850, 2075);
context.lineTo(750, 2300);
context.lineTo(800, 2250);
context.lineTo(850, 2300);
context.lineTo(850, 2075);
context.strokeStyle = 'black';
context.lineWidth = 6;
context.stroke();

context.beginPath();
context.moveTo(850, 2075);
context.lineTo(700, 1850);
context.lineTo(650, 1900);
context.lineTo(850, 2075);
context.strokeStyle = 'black';
context.lineWidth = 6;
context.stroke();

context.beginPath();
context.moveTo(850, 2075);
context.lineTo(700, 2300);
context.lineTo(650, 2250);
context.lineTo(850, 2075);
context.strokeStyle = 'black';
context.lineWidth = 6;
context.stroke();

context.beginPath();
context.moveTo(850, 2075);
context.lineTo(650, 1950);
context.lineTo(650, 2200);
context.lineTo(850, 2075);
context.strokeStyle = 'black';
context.lineWidth = 6;
context.stroke();

context.beginPath();
context.moveTo(750, 2050);
context.lineTo(700, 2050);
context.lineTo(700, 2100);
context.lineTo(750, 2100);
context.lineTo(750, 2050);
context.strokeStyle = 'black';
context.lineWidth = 6;
context.stroke();
