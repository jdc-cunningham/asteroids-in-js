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
