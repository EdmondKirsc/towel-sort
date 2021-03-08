
module.exports = function towelSort (matrix) {
  if (!matrix) {
    return [];
  }
  for (let i = 0; i < matrix.length; i++) {
    if ((i % 2) == 1) {
      matrix[i].reverse();
    }
  }

  let result = [];
  for (i = 0; i < matrix.length; i++) {
    result = result.concat(matrix[i]);
  } 
  return result;
}



