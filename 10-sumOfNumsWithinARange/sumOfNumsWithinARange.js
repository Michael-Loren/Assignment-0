function sumOfNumsWithinARange(nums, start, end) {
    let tally = 0;

    for (const el of nums){
      if (el >= start && el <= end){
        tally++;
      }
    }

    return tally;

}

// Do not edit this line;
module.exports = sumOfNumsWithinARange;