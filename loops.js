function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      array.push('I am 1 strange loop.');
    } else {
      array.push(`I am ${i} strange loop.`)
    }
  }
  return array
}

function whileLoop(i) {
  while (i > 0) {
    console.log(--i)
  }
  return 'done'
}

function doWhileLoop(num) {
  var a = 0;
  
  function incrementVariable() {
    a = a + 1;
    return i
  } 
  do {
    console.log('I run once regardless.');
  } while (incrementVariable() < num);
}