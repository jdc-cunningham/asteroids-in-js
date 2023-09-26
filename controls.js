// emit events
document.addEventListener('keypress', (e) => {
  if (e.key === 'w') {
    console.log('up');
  }

  if (e.key === 's') {
    console.log('down');
  }

  // yeah you can do short hand but I still have to figure out
  // how I'm going to use these, ugh my hands are so dry
  if (e.key === 'a') console.log('left');
  if (e.key === 'd') console.log('right');
});

document.addEventListener('click', (e) => {
  console.log(e.clientX, e.clientY);
});
