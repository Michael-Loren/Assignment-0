function sumOfAllEvenNumbers(nums) {
  let val = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 == 0)
      val++;
  }

  return val;
}

// Do not edit this line;
module.exports = sumOfAllEvenNumbers;