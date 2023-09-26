// https://stackoverflow.com/questions/4839993/how-to-draw-polygons-on-an-html5-canvas
// https://www.html5canvastutorials.com/tutorials/html5-canvas-line-color/
// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineWidth
// https://stackoverflow.com/questions/8696631/canvas-drawings-like-lines-are-blurry
// https://stackoverflow.com/questions/2142535/how-to-clear-the-canvas-for-redrawing

const ship = {
  vertices: [
    [25, 0],
    [50, 50],
    [0, 50],
    [25, 0],
  ],
  center: [12.5, 25],
  rotation: 0, // deg,
  position: [300, 300],
  color: '#000000',
  lineWidth: 2,
}

// tmp
const canvas = document.getElementById('canvas');
const body = document.querySelector('body');
const pageWidth = body.offsetWidth;
const pageHeight = body.offsetHeight;

// set canvas dimensions
canvas.width = pageWidth;
canvas.height = pageHeight;

var ctx = canvas.getContext('2d');

const clearCanvas = (ctx) => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

const draw = (ctx, item) => {
  // ctx.fillStyle = '#f00';
  ctx.beginPath();

  item.vertices.forEach((point, index) => {
    if (index === 0) {
      ctx.moveTo(point[0] + item.position[0], point[1] + item.position[1]); // could do obj x, y
    } else {
      ctx.lineTo(point[0] + item.position[0], point[1] + item.position[1]);
    }
  });

  ctx.closePath();
  ctx.lineWidth = item.lineWidth;
  // ctx.fill();
  ctx.strokeStyle = item.color;
  ctx.stroke();
}

clearCanvas(ctx);
draw(ctx, ship);

const updateScene = () => {
  clearCanvas(ctx);
  draw(ctx, ship);
}
