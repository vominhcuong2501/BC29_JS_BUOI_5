/**
 * Bài tập 1
 * - Đầu vào
 *      Nhập điểm chuẩn: diemChuan
 *      Nhập điểm 3 môn: diemMon1; diemMon2; diemMon3
 *      Chọn vùng 
 *      Chọn đối tượng
 * - xử lý
 *      Nếu có vùng thi điền số vùng A,B,C và không có đánh dấu X
 *      Nếu có đối tượng thì điền số 1,2,3 và nếu không có đánh số 0
 *      diemTongKet = diemMon1 + diemMon2 + diemMon3 + diemVung + diemDT
 * - Đầu ra
 *      Nếu diemTongket > diemChuan => đậu. Ngược lại rớt
 */

function loaiVung() {
    // xét loại mã vùng
    var A = document.getElementById("a");
    var B = document.getElementById("b");
    var C = document.getElementById("c");
    var X = document.getElementById("x");
    var ketqua;
    if(A.checked) {
        ketqua = 2;
    } else if(B.checked) {
        ketqua = 1;
    } else if(C.checked) {
        ketqua = 0.5;
    } else if(X.checked) {
        ketqua = 0;
    } else {
        ketqua = 0;
    }
    return ketqua;
}
function loaiDoiTuong() {
    // xét loại đối tượng
    var number_1 = document.getElementById("1");
    var number_2 = document.getElementById("2");
    var number_3 = document.getElementById("3");
    var number_0 = document.getElementById("0");
    var ketqua;
    if(number_1.checked) {
        ketqua = 2.5;
    } else if(number_2.checked) {
        ketqua = 1;
    } else if(number_3.checked) {
        ketqua = 0.5;
    } else if(number_0.checked) {
        ketqua = 0;
    } else {
        ketqua = 0;
    }
     return ketqua;
 }
function TinhDiem() {
    // nhận dữ liệu từ ô input
     var diemMon1 = document.getElementById("diemMon1").value*1;
     var diemMon2 = document.getElementById("diemMon2").value*1;
     var diemMon3 = document.getElementById("diemMon3").value*1;
     var diemChuan = document.getElementById("diemChuan").value*1;
    // nhận kêt quả mã vùng và đối tượng
     var maVung = loaiVung();
     var maDoiTuong = loaiDoiTuong();
    // tính điểm tổng kết
     var diemTongKet = diemMon1 + diemMon2 + diemMon3 + maVung + maDoiTuong;
     var ketqua = 0;
    // xét kết quả
     if(diemTongKet >= diemChuan && diemMon1 !== 0 && diemMon2 !== 0 && diemMon3 !== 0){
        ketqua = "đậu";
     } else {
         ketqua = "rớt"
     }
     document.getElementById("thongbao1").innerHTML ="Thí sinh "+ ketqua + " với tổng số điểm đạt được là "+ diemTongKet;
     document.getElementById("thongbao1").style.background = "aqua";

 }

 /**
 * Bài tập 2
 * - Đầu vào
 *      Nhập tên: ten
 *      Nhập số KW: soKW
 * - xử lý
 *      50kw đầu: 500đ/kw
 *      50kw kế: 650đ/kw
 *      100kw kế: 850đ/kw
 *      150kw kế: 1100đ/kw
 *      Còn lại: 1300đ/kw
 * - Đầu ra
 *      tính tiền
 */
function TinhTien() {
    // nhận thông tin nhập
    var ten = document.getElementById("ten").value;
    var soKW = document.getElementById("soKW").value*1;
    var ketqua = 0;
    // đặt biến số tiền
    var A = 500;
    var B = 650;
    var C = 850;
    var D = 1100;
    var E = 1300;
    // Công thức tính
    if(soKW <= 50) {
        ketqua = soKW*A;
    } else if(soKW > 50 && soKW <= 100) {
        ketqua = 50*A + (soKW-50)*B;
    } else if(soKW > 100 && soKW <= 200) {
        ketqua = 50*A + 50*B + (soKW-100)*C; 
    } else if(soKW > 200 && soKW <= 350) {
        ketqua = 50*A + 50*B + 100*C + (soKW -200)*D;
    } else {
        ketqua = 50*A + 50*B + 100*C + 150*D + (soKW - 350)*E;
    }
    // Quy đổi VND
    var currentFormat = new Intl.NumberFormat("vn-VN");
    var ketqua = currentFormat.format(ketqua);
    // Tính tiền
    document.getElementById("thongbao2").innerHTML ="Tên người dùng: "+ ten + " số tiền điện là "+ ketqua + " vnđ";
     document.getElementById("thongbao2").style.background = "aqua";
}

/**
 * Bài tập 3
 * - Đầu vào
 *      Nhập họ tên: hoTen
 *      Nhập tổng thu nhập: tongThuNhap
 *      Nhập số người phụ thuộc: soNguoiPhuThuoc
 * - xử lý
 *      Thu nhập chịu thuế = tổng thu nhập - 4tr - số người phụ thuộc * 1.6
 *      Thuế phải trả là nếu
 *          thu nhập chịu thuế <=60 * thuế suất 5%
 *          60 < thu nhập chịu thuế <= 120 * thuế suất 10%
 *          120 < thu nhập chịu thuế <= 210 * thuế suất 15%
 *          210 < thu nhập chịu thuế <=- 384 * thuế suất 20%
 *          384 < thu nhập chịu thuế <= 624 * thuế suất 25%
 *          624 < thu nhập chịu thuế <= 960 * thuế suất 30%
 *          thu nhập chịu thuế > 960 * thuế suất 35%
 * - Đầu ra
 *      tính tiền
 */
function TinhTienThue() {
    var hoTen = document.getElementById("hoTen").value;
    var tongThuNhap = document.getElementById("tongThuNhap").value*1;
    var soNguoiPhuThuoc = document.getElementById("soNguoiPhuThuoc").value*1;
    var a = 4;
    var b = 1.6;
    var thuNhapChiuThue = tongThuNhap - a - soNguoiPhuThuoc*b;
    var ketqua;
    if(thuNhapChiuThue <= 60) {
        ketqua = thuNhapChiuThue*(5/100)
    } else if(thuNhapChiuThue > 60 && thuNhapChiuThue <= 120) {
        ketqua =  60*(5/100) + (thuNhapChiuThue - 60)*(10/100);
    } else if(thuNhapChiuThue > 120 && thuNhapChiuThue <= 210) {
        ketqua =  60*(5/100) + 60*(10/100) + (thuNhapChiuThue-120)*(15/100); 
    } else if(thuNhapChiuThue > 210 && thuNhapChiuThue <= 384) {
        ketqua =  60*(5/100) + 60*(10/100) + 90*(15/100) + (thuNhapChiuThue-210)*(20/100); 
    } else if(thuNhapChiuThue > 384 && thuNhapChiuThue <= 624) {
        ketqua =  60*(5/100) + 60*(10/100) + 90*(15/100) + 174*(20/100) + (thuNhapChiuThue-384)*(25/100);  
    } else if(thuNhapChiuThue > 624 && thuNhapChiuThue <= 960) {
        ketqua =  60*(5/100) + 60*(10/100) + 90*(15/100) + 174*(20/100) + 336*(25/100) + (thuNhapChiuThue-624)*(30/100); 
    } else if(thuNhapChiuThue > 960) {
        ketqua =  60*(5/100) + 60*(10/100) + 90*(15/100) + 174*(20/100) + 336*(25/100) + 240*(30/100)+ (thuNhapChiuThue-960)*(35/100); 
    } 
    // Quy đổi VND
    var currentFormat = new Intl.NumberFormat("vn-VN");
    var ketqua = currentFormat.format(ketqua);
    // Tính tiền
    document.getElementById("thongbao3").innerHTML ="Tên người chịu thuế: "+ hoTen + " số tiền thuế phải trả là "+ ketqua + " triệu vnđ";
     document.getElementById("thongbao3").style.background = "aqua";
}

/**
 * Bài tập 4
 * - Đầu vào
 *      Nhập mã khách hàng: maKH
 *      Chọn loại KH: doanhnghiep/nhadan
 *      Nhập số kết nối: soketnoi
 *      Nhập số kênh cao cấp: sokenh
 * - xử lý
 *      Nếu chọn nhà dân thì ô số kết nối bị ẩn không thể nhập 
 *          Phí xử lý hóa đơn: 4.5$
 *          Phí dịch vụ cơ bản: 20.5$
 *          Thuê kênh cao cấp: 7.5$/kênh
 *      Nếu chọn doanh nghiệp thì được nhâp ô kết nối
 *          Phí xử lý hóa đơn: 15$
 *          Phí dịch vụ cơ bản: 75$ cho 10 cái kết nối, thêm mỗi cái 5$
 *          Thuê kênh cao cấp: 50$/kênh
 * - Đầu ra
 *      tính tiền
 */
document.getElementById("nhadan").onclick = function() {
        document.getElementById("soketnoi").disabled = true;
 }
document.getElementById("doanhnghiep").onclick = function() {
    document.getElementById("soketnoi").disabled = false;
}
function loaiKH() {
    var doanhNghiep = document.getElementById("doanhnghiep").checked ;
    var nhaDan = document.getElementById("nhadan").checked;
    var ketqua;
    if(doanhNghiep) {
        ketqua = "doanhnghiep";
    } else if(nhaDan) {
        ketqua = "nhadan";
    }
    return ketqua;
}

function TinhTienCap() {
    // nhà dân
    var phiXuLy1 = 4.5;
    var phiDichVu1 = 20.5;
    var phiKenh1 = 7.5;
    // doanh nghiệp
    var phiXuLy2 = 15;
    var phiDichVu2 = 75;
    var phiKenh2 = 50;
    var phiThemKetnoi = 5;
    // thông tin nhập
    var maKH = document.getElementById("maKH").value;
    var soKetNoi = document.getElementById("soketnoi").value*1;
    var soKenh = document.getElementById("sokenh").value*1;
    var LoaiKH = loaiKH();
    var result = 0;
    switch(LoaiKH) {
        case 'doanhnghiep':
            if(soKetNoi > 10) {
                result = phiDichVu2 + phiKenh2*soKenh + phiXuLy2 +(soKetNoi-10)*phiThemKetnoi;
            } else {
                result = phiDichVu2 + phiKenh2*soKenh + phiXuLy2;
            }
        break;
        case 'nhadan':
            result = phiDichVu1 + phiKenh1*soKenh + phiXuLy1;
        break;
    }
    document.getElementById("thongbao4").innerHTML ="Mã khách hàng: "+ maKH + " .Số tiền cáp phải trả là "+ result + "$";
     document.getElementById("thongbao4").style.background = "aqua";
}
