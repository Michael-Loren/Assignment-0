function titleCaseEdit(title) {
 
  let tStr = title.toString().replaceAll(/\b\w/g, function(a) { return a.toUpperCase(); });
 
  return tStr;
  
}
// Do not edit this line;
module.exports = titleCaseEdit;