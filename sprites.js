// https://stackoverflow.com/questions/4839993/how-to-draw-polygons-on-an-html5-canvas
// https://www.html5canvastutorials.com/tutorials/html5-canvas-line-color/
// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineWidth
// https://stackoverflow.com/questions/8696631/canvas-drawings-like-lines-are-blurry

const ship = [

];

// tmp
const canvas = document.getElementById('canvas');
const body = document.querySelector('body');
const pageWidth = body.offsetWidth;
const pageHeight = body.offsetHeight;

// set canvas dimensions
canvas.width = pageWidth;
canvas.height = pageHeight;

var ctx = canvas.getContext('2d');
// ctx.fillStyle = '#f00';
ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(100,50);
ctx.lineTo(50, 100);
ctx.lineTo(0, 90);
ctx.closePath();
ctx.lineWidth = 2;
// ctx.fill();
ctx.strokeStyle = "#000000";
ctx.stroke();