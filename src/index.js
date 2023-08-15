module.exports = function reverse (n) {
  let N=Math.abs(n);
  return N.toString().split("").reverse().join("");
  console.log (reverse);
}
