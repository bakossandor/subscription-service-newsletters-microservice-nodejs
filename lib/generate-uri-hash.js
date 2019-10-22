function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateHash() {
  const letters = [];
  for (let i = 0; i < 10; i++) {
    // get an asci character decimal between a and z
    letters.push(getRandomInt(97, 122));
  }
  return String.fromCharCode(...letters);
}

module.exports = generateHash;
