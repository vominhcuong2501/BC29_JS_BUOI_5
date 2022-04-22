function loaiXe() {
    var grabCar = document.getElementById("grabCar").checked;
    var grabSUV = document.getElementById("grabSUV").checked;
    var grabBlack = document.getElementById("grabBlack").checked;
    var ketqua;
    if(grabCar) {
        ketqua = "grabCar";
    } else if(grabSUV) {
        ketqua = "grabSUV";
    } else if(grabBlack) {
        ketqua = "grabBlack";
    }
    return ketqua;
}

function TinhTien() {
    var soKM = document.getElementById("soKM").value*1;
    var thoiGianCho = document.getElementById("thoigiancho").value*1;
    var divThanhTien = document.getElementById("divThanhTien");
    divThanhTien.style.display = "block";
    var spanTien = document.getElementById("xuatTien");
    var LoaiXe = loaiXe();
    var ketqua = 0;
    switch(LoaiXe) {
        case "grabCar":
            if(soKM <= 1 && thoiGianCho > 3) {
                ketqua = soKM*8000 + (thoiGianCho-3)/3*2000;
            } else if(soKM <= 1 && thoiGianCho <= 3) {
                ketqua = soKM*8000;
            } else if(soKM >1 && soKM <= 19 && thoiGianCho > 3) {
                ketqua = 1*8000 + (soKM-1)*7500 + (thoiGianCho-3)/3*2000;
            } else if(soKM >1 && soKM <= 19 && thoiGianCho <= 3) {
                ketqua = 1*8000 + (soKM-1)*7500;
            } else if(soKM > 19 && thoiGianCho > 3) {
                ketqua = 1*8000 + 18*7500 + (soKM-19)*7000 + (thoiGianCho-3)/3*2000;
            } else if(soKM >1 && soKM <= 19 && thoiGianCho <= 3) {
                ketqua = 1*8000 + 18*7500 + (soKM-19)*7000;
            }
        break;
        case "grabSUV":
            if(soKM <= 1 && thoiGianCho > 3) {
                ketqua = soKM*9000 + (thoiGianCho-3)/3*3000;
            } else if(soKM <= 1 && thoiGianCho <= 3) {
                ketqua = soKM*9000;
            } else if(soKM >1 && soKM <= 19 && thoiGianCho > 3) {
                ketqua = 1*9000 + (soKM-1)*8500 + (thoiGianCho-3)/3*3000;
            } else if(soKM >1 && soKM <= 19 && thoiGianCho <= 3) {
                ketqua = 1*9000 + (soKM-1)*8500;
            } else if(soKM > 19 && thoiGianCho > 3) {
                ketqua = 1*9000 + 18*8500 + (soKM-19)*8000 + (thoiGianCho-3)/3*3000;
            } else if(soKM >1 && soKM <= 19 && thoiGianCho <= 3) {
                ketqua = 1*9000 + 18*8500 + (soKM-19)*8000;
            }
        break;
        case "grabCar":
            if(soKM <= 1 && thoiGianCho > 3) {
                ketqua = soKM*10000 + (thoiGianCho-3)/3*3500;
            } else if(soKM <= 1 && thoiGianCho <= 3) {
                ketqua = soKM*10000;
            } else if(soKM >1 && soKM <= 19 && thoiGianCho > 3) {
                ketqua = 1*10000 + (soKM-1)*9500 + (thoiGianCho-3)/3*3500;
            } else if(soKM >1 && soKM <= 19 && thoiGianCho <= 3) {
                ketqua = 1*10000 + (soKM-1)*9500;
            } else if(soKM > 19 && thoiGianCho > 3) {
                ketqua = 1*10000 + 18*9500 + (soKM-19)*9000 + (thoiGianCho-3)/3*3500;
            } else if(soKM >1 && soKM <= 19 && thoiGianCho <= 3) {
                ketqua = 1*10000 + 18*9500 + (soKM-19)*9000;
            }
        break;
    }
    spanTien.innerHTML = "Số tiền là: " + ketqua;

}