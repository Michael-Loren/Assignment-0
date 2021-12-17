function fizzBuzz(start, end) {
  let arr = [];
  for (start; start <= end; start++) {
    if (start % 3 == 0 && start % 5 == 0)
      arr.push("FizzBuzz");
    else if (start % 3 == 0)
      arr.push("Fizz");
    else if (start % 5 == 0)
      arr.push("Buzz");
    else
      arr.push(start);
  }
  return arr;
}

// Do not edit this line;
module.exports = fizzBuzz;