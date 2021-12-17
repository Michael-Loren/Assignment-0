function frequencyCounter(word) {
  const map = {};
  word.split("").forEach(item => {
     if(map[item]){
        map[item]++;
     }else{
        map[item] = 1;
     }
  });
  return map;
}

// Do not edit this line;
module.exports = frequencyCounter;