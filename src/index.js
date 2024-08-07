const arr = [
  [ 1, 2, 3 ],
  [ 4, 5, 6 ],
  [ 7, 8, 9 ],
  [ 10, 11, 12 ],
 ]
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(matrix === undefined) return []
  let result = []
  for(let i = 0; i < matrix.length ; i++) {
    if(i % 2 === 0) {
     result = result.concat(matrix[i]);
    } else {
      result = result.concat(matrix[i].reverse());
    }
    
  }
  return result;
}
// console.log(towelSort(arr));
// console.log(arr.length);


