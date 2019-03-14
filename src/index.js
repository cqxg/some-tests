/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var result = 0;  
  for (var i = 0; i < preferences.length; i++) { 
      var a = preferences[i] - 1;
      if (a == i) continue;
      var b = preferences[a] - 1;
      if (a == b) continue;
      var c = preferences[b] - 1;
      if (c == b) continue;
      if (c == i)  result++;
   }
   return result / 3;
}