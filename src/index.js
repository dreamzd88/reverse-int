module.exports = function reverse (n) {
    n = Math.abs(n);
    let y = n.toString().split("").reverse().join("");
    return y;
}
