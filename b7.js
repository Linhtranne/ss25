let a = parseInt(prompt("Nhập số thứ nhất: "));
let b = parseInt(prompt("Nhập số thứ hai: "));
let c = parseInt(prompt("Nhập số thứ ba: "));
let d = parseInt(prompt("Nhập số thứ tư: "));
let findGCD = function(x, y) {
    while (y !== 0) {
        let temp = y;
        y = x % y;
        x = temp;
    }
    return x;
}
let GCDAB = findGCD(a, b);
let GCDABC = findGCD(GCDAB, c);
let GCDABCD = findGCD(GCDABC, d);
let LCM = (a * b * c * d) / GCDABCD;
console.log("Bội chung nhỏ nhất của", a, b, c, d, "là:", LCM);
