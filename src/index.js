module.exports = function solveEquation(equation) {
  var equationStr = equation.split(' ').join('');
  var argArr = equationStr.split('x');
  var a = Number(argArr[0].substring(0, argArr[0].length - 1));
  var b = Number(argArr[1].substring(2, argArr[1].length - 1));
  var c = Number(argArr[2]);

  var D = b*b - 4*a*c;
  var x1 = Math.round((-b + Math.sqrt(D)) / (2*a));
  var x2 = Math.round((-b - Math.sqrt(D)) / (2*a)); 

  var solutions = [];
  solutions.push(x1);
  solutions.push(x2);
  solutions.sort((a, b) => a-b);

  return solutions;
}
