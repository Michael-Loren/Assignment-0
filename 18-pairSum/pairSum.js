function pairSum(nums, target) {
  if (nums.length < 2){
    throw "Array too small"; //I guess this is how you do it?
  }
  for (let i = 0; i < nums.length; i++)
    for (let j = 0; j < nums.length; j++)
      if (j != i && nums[i] + nums[j] == target)
        return true;

  return false;

}

// Do not edit this line;
module.exports = pairSum;