/* Function (hàm) */
// hoisting
// - Không có tham số
// - Có tham số ( 1 hoặc nhiều tham số)
// - Không có giá trị trả về
// - Có giá trị trả về

// Khai báo hàm
function xuatThongTin() {
    // phần thân của hàm
    console.log("Hello Cybersoft");
}
// gọi lại hàm
xuatThongTin();

// global : đặt var ngoài function thì cung cấp toàn bộ file
function tinhTong() {
    // local
    var number_1 = 10;
    var number_2 = 5;
    var tong = number_1 + number_2;
    console.log(tong);
}
tinhTong();

function tinhTong1(a) {
    console.log(a);
}
var number = 20;
tinhTong1(number);

function tinhTong2(a,b) {
    var tong = a + b;
    return tong;
} 
var sum = tinhTong2(20,10) * 2;
console.log(sum);

/* Tính lương
 - so ngay lam: 5
 - luong ngay: 100000
 Viết hàm tính lương có 2 tham số: số ngày làm & lương ngày
 Hàm tính lương trả về lương đã tính
*/
function tinhLuong(soNgay,luongNgay) {
    var tienLuong = soNgay * luongNgay;
    return tienLuong;
}
var luong = tinhLuong(5,100000);
console.log("Lương là: " + luong);

/* function literal
 + khác nhau: là phải gọi hàm sau khi khai báo còn gọi trước sẽ báo lỗi
*/
var tinhHieu = function() {
    console.log("tinhHieu");
}
tinhHieu();

/* kiem tra chẵn lẻ */
function kiemTraSoChanLe(number) {
    // result = true : số chẵn
    // result = false : số lẻ
    var result;
    if(number%2 === 0) {
        // số chẵn
        result = true;
    } else {
        // số lẻ
        result = false;
    }
    return result;
}

// Người dùng nhập số. Kiểm tra số chẵn lẻ
document.getElementById("kiemTra").onclick = function() {
    // lấy value từ thẻ input
    var number = document.getElementById("txtNumber").value*1;
    var result = "";

    // gọi hàm kiểm tra so chẵn lẻ
    var isstatus = kiemTraSoChanLe(number);
    if(isstatus) {
        result = "Số "+ number + " là số chẵn ";
    } else {
        result = "Số "+ number + " là số lẻ ";
    }

    // show ket qua
    document.getElementById("thongbao").innerHTML = result;
}


/* Tìm số lớn nhất trong ba số
 + Đầu vào
    number_1 = 5
    number_2 = 10
    number_3 = 20
 + Xử lý
    Viết hàm tìm số lớn nhất
    Truyền vô 3 tham số a,b,c
        var max = num_1;
        num_2 > max;
            max = num_2;
        num_3 > max;
            max = num_3;
    Trả về SLN
 + Đầu ra
    show kết quả
*/
function timSLN(a,b,c) {
    var result;
    if(a>b && a>c) {
        result = a;
    } else if(b>a && b>c) {
        result = b;
    } else if(c>a && c>b) {
        result = c;
    }
    return result;
}
var SLN = timSLN(20,30,40);
console.log("Số lớn nhất là: " + SLN);


