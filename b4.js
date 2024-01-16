var a = prompt("Nhập a");
var b = prompt("Nhập b");
var inputa = parseInt(a);
var inputb = parseInt(b);
if (isNaN(a) || isNaN(b) || a <= 0 || b <= 0) {
    console.log("Nhập sai rồi.");
} else {
    console.log("Các số chia hết cho " + b + " trong khoảng từ 1 đến " + a + " là:");
    for (var i = 1; i <= a; i++) {
        if (i % b === 0) {
            console.log(i);
        }
    }
}