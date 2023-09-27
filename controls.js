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

  if (mouseCoord[0] >= shipCenter[0] && mouseCoord[1] <= shipCenter[1]) {
    degBase = 0;

    ratio = Math.atan(
      Math.abs(mouseCoord[0] - shipCenter[0]) /
      Math.abs(mouseCoord[1] - shipCenter[1])
    );
  }

  else if (mouseCoord[0] >= shipCenter[0] && mouseCoord[1] >= shipCenter[1]) {
    degBase = 90;

    ratio = Math.atan(
      Math.abs(mouseCoord[1] - shipCenter[1]) /
      Math.abs(mouseCoord[0] - shipCenter[0])
    );
  }

  else if (mouseCoord[0] <= shipCenter[0] && mouseCoord[1] >= shipCenter[1]) {
    degBase = 180;

    ratio = Math.atan(
      Math.abs(mouseCoord[0] - shipCenter[0]) /
      Math.abs(mouseCoord[1] - shipCenter[1])
    );
  }

  else {
    degBase = 270;

    ratio = Math.atan(
      Math.abs(mouseCoord[1] - shipCenter[1]) /
      Math.abs(mouseCoord[0] - shipCenter[0])
    );
  }

  const mouseAngle = (ratio * 180) / Math.PI;

  ship.rotation = (mouseAngle + degBase).toFixed(0);

  updateScene();

  console.log((mouseAngle + degBase).toFixed(0));
});
