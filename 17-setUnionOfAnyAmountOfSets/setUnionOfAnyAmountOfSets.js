function setUnionOfAnyAmountOfSets(...args) {
  const union = new Set(); //I love set theory!!
  for (const i of args)
    for (const j of i)
      union.add(j);
  return union;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;