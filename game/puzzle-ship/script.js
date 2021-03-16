const dropArea = document.getElementById('drop');
const figure1 = document.getElementById('figure1');
const figure2 = document.getElementById('figure2');
const figure3 = document.getElementById('figure3');
const figure4 = document.getElementById('figure4');
const figure5 = document.getElementById('figure5');
const figure6 = document.getElementById('figure6');
const figure7 = document.getElementById('figure7');

let gMouseDownX = 0;
let gMouseDownY = 0;
let gMouseDownOffsetX = 0;
let gMouseDownOffsetY = 0;

addListeners();
addListeners1();
addListeners2();
addListeners3();
addListeners4();
addListeners5();
addListeners6();

function addListeners() {
  figure1.addEventListener('mousedown', mouseDown, false);
  window.addEventListener('mouseup', mouseUp, false);
}

function mouseUp() {
  window.removeEventListener('mousemove', divMove, true);
}

function mouseDown(e) {
  gMouseDownX = e.clientX;
  gMouseDownY = e.clientY;

  let div = figure1


  //The following block gets the X offset (the difference between where it starts and where it was clicked)

  let leftPart = "350px";
  if (!div.style.left)
    leftPart += "0px";    //In case this was not defined as 0px explicitly.
  else
    leftPart = div.style.left;
  let leftPos = leftPart.indexOf("px");
  let leftNumString = leftPart.slice(0, leftPos); // Get the X value of the object.
  gMouseDownOffsetX = gMouseDownX - parseInt(leftNumString, 10);


  //The following block gets the Y offset (the difference between where it starts and where it was clicked)
  let topPart = "560px";
  if (!div.style.top)
    topPart += "0px";     //In case this was not defined as 0px explicitly.
  else
    topPart = div.style.top;
  let topPos = topPart.indexOf("px");
  let topNumString = topPart.slice(0, topPos);    // Get the Y value of the object.
  gMouseDownOffsetY = gMouseDownY - parseInt(topNumString, 10);

  window.addEventListener('mousemove', divMove, true);

}

function divMove(e) {

  var div = figure1;

  div.style.position = 'absolute';
  let topAmount = e.clientY - gMouseDownOffsetY;
  div.style.top = topAmount + 'px';
  let leftAmount = e.clientX - gMouseDownOffsetX;
  div.style.left = leftAmount + 'px';
}

function addListeners1() {
  figure2.addEventListener('mousedown', mouseDown1, false);
  window.addEventListener('mouseup', mouseUp1, false);
}

function mouseUp1() {
  window.removeEventListener('mousemove', divMove1, true);
}

function mouseDown1(e) {
  gMouseDownX = e.clientX;
  gMouseDownY = e.clientY;

  let div = figure2;

  let leftPart = "450px";
  if (!div.style.left)
    leftPart += "0px";   
  else
    leftPart = div.style.left;
  let leftPos = leftPart.indexOf("px");
  let leftNumString = leftPart.slice(0, leftPos);
  gMouseDownOffsetX = gMouseDownX - parseInt(leftNumString, 10);

  let topPart = "560px";
  if (!div.style.top)
    topPart += "0px";  
  else
    topPart = div.style.top;
  let topPos = topPart.indexOf("px");
  let topNumString = topPart.slice(0, topPos);    
  gMouseDownOffsetY = gMouseDownY - parseInt(topNumString, 10);

  window.addEventListener('mousemove', divMove1, true);

}

function divMove1(e) {

  var div = figure2;

  div.style.position = 'absolute';
  let topAmount = e.clientY - gMouseDownOffsetY;
  div.style.top = topAmount + 'px';
  let leftAmount = e.clientX - gMouseDownOffsetX;
  div.style.left = leftAmount + 'px';
}

function addListeners2() {
  figure3.addEventListener('mousedown', mouseDown2, false);
  window.addEventListener('mouseup', mouseUp2, false);
}

function mouseUp2() {
  window.removeEventListener('mousemove', divMove2, true);
}

function mouseDown2(e) {
  gMouseDownX = e.clientX;
  gMouseDownY = e.clientY;

  let div = figure3;

  let leftPart = "550px";
  if (!div.style.left)
    leftPart += "0px";    
  else
    leftPart = div.style.left;
  let leftPos = leftPart.indexOf("px");
  let leftNumString = leftPart.slice(0, leftPos); 
  gMouseDownOffsetX = gMouseDownX - parseInt(leftNumString, 10);

  let topPart = "560px";
  if (!div.style.top)
    topPart += "0px"; 
  else
    topPart = div.style.top;
  let topPos = topPart.indexOf("px");
  let topNumString = topPart.slice(0, topPos); 
  gMouseDownOffsetY = gMouseDownY - parseInt(topNumString, 10);

  window.addEventListener('mousemove', divMove2, true);

}

function divMove2(e) {

  var div = figure3;

  div.style.position = 'absolute';
  let topAmount = e.clientY - gMouseDownOffsetY;
  div.style.top = topAmount + 'px';
  let leftAmount = e.clientX - gMouseDownOffsetX;
  div.style.left = leftAmount + 'px';
}

function addListeners3() {
  figure4.addEventListener('mousedown', mouseDown3, false);
  window.addEventListener('mouseup', mouseUp3, false);
}

function mouseUp3() {
  window.removeEventListener('mousemove', divMove3, true);
}

function mouseDown3(e) {
  gMouseDownX = e.clientX;
  gMouseDownY = e.clientY;

  let div = figure4;


  //The following block gets the X offset (the difference between where it starts and where it was clicked)

  let leftPart = "650px";
  if (!div.style.left)
    leftPart += "0px";    //In case this was not defined as 0px explicitly.
  else
    leftPart = div.style.left;
  let leftPos = leftPart.indexOf("px");
  let leftNumString = leftPart.slice(0, leftPos); // Get the X value of the object.
  gMouseDownOffsetX = gMouseDownX - parseInt(leftNumString, 10);


  //The following block gets the Y offset (the difference between where it starts and where it was clicked)
  let topPart = "560px";
  if (!div.style.top)
    topPart += "0px";     //In case this was not defined as 0px explicitly.
  else
    topPart = div.style.top;
  let topPos = topPart.indexOf("px");
  let topNumString = topPart.slice(0, topPos);    // Get the Y value of the object.
  gMouseDownOffsetY = gMouseDownY - parseInt(topNumString, 10);

  window.addEventListener('mousemove', divMove3, true);

}

function divMove3(e) {

  var div = figure4;

  div.style.position = 'absolute';
  let topAmount = e.clientY - gMouseDownOffsetY;
  div.style.top = topAmount + 'px';
  let leftAmount = e.clientX - gMouseDownOffsetX;
  div.style.left = leftAmount + 'px';
}

function addListeners4() {
  figure5.addEventListener('mousedown', mouseDown4, false);
  window.addEventListener('mouseup', mouseUp4, false);
}

function mouseUp4() {
  window.removeEventListener('mousemove', divMove4, true);
}

function mouseDown4(e) {
  gMouseDownX = e.clientX;
  gMouseDownY = e.clientY;

  let div = figure5;


  //The following block gets the X offset (the difference between where it starts and where it was clicked)

  let leftPart = "750px";
  if (!div.style.left)
    leftPart += "0px";    //In case this was not defined as 0px explicitly.
  else
    leftPart = div.style.left;
  let leftPos = leftPart.indexOf("px");
  let leftNumString = leftPart.slice(0, leftPos); // Get the X value of the object.
  gMouseDownOffsetX = gMouseDownX - parseInt(leftNumString, 10);


  //The following block gets the Y offset (the difference between where it starts and where it was clicked)
  let topPart = "560px";
  if (!div.style.top)
    topPart += "0px";     //In case this was not defined as 0px explicitly.
  else
    topPart = div.style.top;
  let topPos = topPart.indexOf("px");
  let topNumString = topPart.slice(0, topPos);    // Get the Y value of the object.
  gMouseDownOffsetY = gMouseDownY - parseInt(topNumString, 10);

  window.addEventListener('mousemove', divMove4, true);

}

function divMove4(e) {

  var div = figure5;

  div.style.position = 'absolute';
  let topAmount = e.clientY - gMouseDownOffsetY;
  div.style.top = topAmount + 'px';
  let leftAmount = e.clientX - gMouseDownOffsetX;
  div.style.left = leftAmount + 'px';
}

function addListeners5() {
  figure6.addEventListener('mousedown', mouseDown5, false);
  window.addEventListener('mouseup', mouseUp5, false);
}

function mouseUp5() {
  window.removeEventListener('mousemove', divMove5, true);
}

function mouseDown5(e) {
  gMouseDownX = e.clientX;
  gMouseDownY = e.clientY;

  let div = figure6;


  //The following block gets the X offset (the difference between where it starts and where it was clicked)

  let leftPart = "850px";
  if (!div.style.left)
    leftPart += "0px";    //In case this was not defined as 0px explicitly.
  else
    leftPart = div.style.left;
  let leftPos = leftPart.indexOf("px");
  let leftNumString = leftPart.slice(0, leftPos); // Get the X value of the object.
  gMouseDownOffsetX = gMouseDownX - parseInt(leftNumString, 10);


  //The following block gets the Y offset (the difference between where it starts and where it was clicked)
  let topPart = "560px";
  if (!div.style.top)
    topPart += "0px";     //In case this was not defined as 0px explicitly.
  else
    topPart = div.style.top;
  let topPos = topPart.indexOf("px");
  let topNumString = topPart.slice(0, topPos);    // Get the Y value of the object.
  gMouseDownOffsetY = gMouseDownY - parseInt(topNumString, 10);

  window.addEventListener('mousemove', divMove5, true);

}

function divMove5(e) {

  var div = figure6;

  div.style.position = 'absolute';
  let topAmount = e.clientY - gMouseDownOffsetY;
  div.style.top = topAmount + 'px';
  let leftAmount = e.clientX - gMouseDownOffsetX;
  div.style.left = leftAmount + 'px';
}

function addListeners6() {
  figure7.addEventListener('mousedown', mouseDown6, false);
  window.addEventListener('mouseup', mouseUp6, false);
}

function mouseUp6() {
  window.removeEventListener('mousemove', divMove6, true);
}

function mouseDown6(e) {
  gMouseDownX = e.clientX;
  gMouseDownY = e.clientY;

  let div = figure7;


  //The following block gets the X offset (the difference between where it starts and where it was clicked)

  let leftPart = "900px";
  if (!div.style.left)
    leftPart += "0px";    //In case this was not defined as 0px explicitly.
  else
    leftPart = div.style.left;
  let leftPos = leftPart.indexOf("px");
  let leftNumString = leftPart.slice(0, leftPos); // Get the X value of the object.
  gMouseDownOffsetX = gMouseDownX - parseInt(leftNumString, 10);


  //The following block gets the Y offset (the difference between where it starts and where it was clicked)
  let topPart = "560px";
  if (!div.style.top)
    topPart += "0px";     //In case this was not defined as 0px explicitly.
  else
    topPart = div.style.top;
  let topPos = topPart.indexOf("px");
  let topNumString = topPart.slice(0, topPos);    // Get the Y value of the object.
  gMouseDownOffsetY = gMouseDownY - parseInt(topNumString, 10);

  window.addEventListener('mousemove', divMove6, true);

}

function divMove6(e) {

  var div = figure7;

  div.style.position = 'absolute';
  let topAmount = e.clientY - gMouseDownOffsetY;
  div.style.top = topAmount + 'px';
  let leftAmount = e.clientX - gMouseDownOffsetX;
  div.style.left = leftAmount + 'px';
}
