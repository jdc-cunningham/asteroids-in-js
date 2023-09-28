// https://stackoverflow.com/questions/15994325/get-degrees-from-ratio-via-tan
// emit events
const motionPixel = 1; // go forward 1 pixel

document.addEventListener('keypress', (e) => {
  if (e.key === 'w') {
    console.log('up');
    ship.position[1] -= 1;
  }

  if (e.key === 's') {
    console.log('down');
    ship.position[1] += 1;
  }

  // yeah you can do short hand but I still have to figure out
  // how I'm going to use these, ugh my hands are so dry
  if (e.key === 'a') {
    console.log('left');
    ship.position[0] -= 1;
  }

  if (e.key === 'd') {
    console.log('right');
    ship.position[0] += 1;
  }

  console.log(ship);

  updateScene();
});

document.addEventListener('click', (e) => {
  console.log(e.clientX, e.clientY);
});

canvas.addEventListener('mouseenter', () => {

});

canvas.addEventListener('mouseleave', () => {

});

canvas.addEventListener('mousemove', (e) => {
  const shipCenter = ship.position;
  const mouseCoord = [e.clientX, e.clientY];

  let degBase = 0;
  let ratio = 0;

  // quadrant as in
  // 4 | 1
  // 3 | 2

  let quadrant = 1;

  if (mouseCoord[0] >= shipCenter[0] && mouseCoord[1] <= shipCenter[1]) {
    degBase = 0;

    ratio = Math.atan(
      Math.abs(mouseCoord[0] - shipCenter[0]) /
      Math.abs(mouseCoord[1] - shipCenter[1])
    );

    quadrant = 1;
  }

  else if (mouseCoord[0] >= shipCenter[0] && mouseCoord[1] >= shipCenter[1]) {
    degBase = 90;

    ratio = Math.atan(
      Math.abs(mouseCoord[1] - shipCenter[1]) /
      Math.abs(mouseCoord[0] - shipCenter[0])
    );

    quadrant = 2;
  }

  else if (mouseCoord[0] <= shipCenter[0] && mouseCoord[1] >= shipCenter[1]) {
    degBase = 180;

    ratio = Math.atan(
      Math.abs(mouseCoord[0] - shipCenter[0]) /
      Math.abs(mouseCoord[1] - shipCenter[1])
    );

    quadrant = 3;
  }

  else {
    degBase = 270;

    ratio = Math.atan(
      Math.abs(mouseCoord[1] - shipCenter[1]) /
      Math.abs(mouseCoord[0] - shipCenter[0])
    );

    quadrant = 4;
  }

  const mouseAngle = (ratio * 180) / Math.PI;

  ship.rotation = parseInt((mouseAngle + degBase).toFixed(0));

  // compute vertex rotation of ship
  const newVertices = [];

  console.log('new', JSON.stringify(ship));

  ship.vertices.forEach(vertex => {
    console.log('vert', vertex);
    const rotationCenter = [0, 0];
    console.log('rotcent', rotationCenter);
    const radiusX = Math.abs(vertex[0] - rotationCenter[0]);
    const radiusY = Math.abs(vertex[1] - rotationCenter[1]);
    const radius = Math.sqrt((radiusX * radiusX) + (radiusY * radiusY));
    console.log('rad', radius);
    const newXVert = parseInt((radius * Math.cos(ship.rotation)).toFixed(0));
    const newYVert = parseInt((radius * Math.sin(ship.rotation)).toFixed(0));
    newVertices.push([newXVert, newYVert]);
  });
  
  console.log(newVertices, ship);

  ship.vertices = newVertices;

  updateScene();

  console.log((mouseAngle + degBase).toFixed(0));
});
