function productOfAnyAmountOfNumbers(...args) {
  let t = 1;
  for (const i of args){
    t *= i;
  }
  return t;
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;