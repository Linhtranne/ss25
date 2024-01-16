let length = parseInt(prompt("Nhập chiều dài của hình chữ nhật:"));
let width = parseInt(prompt("Nhập chiều rộng của hình chữ nhật:"));
if (!isNaN(length) && !isNaN(width) && length > 0 && width > 0) {
    let minSquareCount = 0;
    while (length > 0 && width > 0) {
        if (length > width) {
            minSquareCount += Math.floor(length / width);
            length %= width;
        } else {
            minSquareCount += Math.floor(width / length);
            width %= length;
        }
    }

    console.log("Số hình vuông tối thiểu là: " + minSquareCount);
} else {
    console.log("Vui lòng nhập vào chiều dài và chiều rộng là số nguyên dương.");
}
