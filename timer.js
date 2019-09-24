const times = process.argv.slice(2);

const alert = function(times) {
  for (let time of times) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, time * 1000);
  }
};

alert(times);