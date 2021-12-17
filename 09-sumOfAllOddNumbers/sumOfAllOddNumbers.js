function sumOfAllOddNumbers(nums) {
  let val = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 == 1)
      val++;
  }
  return val;
}

// Do not edit this line;
module.exports = sumOfAllOddNumbers;