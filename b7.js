var inputNum = prompt("Nhập vào 1 số ?")
var perfectNum = (inputNum);
if (isNaN(number) || number <= 0) {
    console.log("Nhập sai rồi.");
} else {
    var sumOfDivisors = 0;
    for (var i = 1; i < nperfectNum; i++) {
        if (perfectNum % i === 0) {
            sumOfDivisors += i;
        }
    }
    if (sumOfDivisors === perfectNum) {
        console.log(perfectNum + " là số hoàn hảo.");
    } else {
        console.log(perfectNum + " không phải là số hoàn hảo.");
    }
}
