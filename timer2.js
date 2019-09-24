const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

console.log('Welcome to interactive timer: Press b to activate it, press a number to set a timer and CTRL+C to exit');
stdin.on('data', (key) => {
  if (key === '\u0003') {
    
    process.exit();
  } else if (key.toLowerCase() === 'b') {
    console.log('Immediate sound');
    process.stdout.write('\x07');
  } else if (typeof Number(key) === 'number' && Number(key) >= 0) {
    process.stdout.write('Startig timer for ' + key + ' seconds');
    setTimeout(() => {
      process.stdout.write('\x07');
    }, key * 1000);
  }

});
