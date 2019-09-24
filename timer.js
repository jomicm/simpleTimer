const times = process.argv.slice(2);

const alert = function(times) {
  for (let time of times) {
    if (typeof Number(time) === 'number' && Number(time) >= 0) {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, time * 1000);
    }
  }
};

alert(times);