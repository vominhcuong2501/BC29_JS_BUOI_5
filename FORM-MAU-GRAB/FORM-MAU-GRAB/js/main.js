// function loaiXe() {
//     var grabCar = document.getElementById("grabCar").checked;
//     var grabSUV = document.getElementById("grabSUV").checked;
//     var grabBlack = document.getElementById("grabBlack").checked;
//     var ketqua;
//     if(grabCar) {
//         ketqua = "grabCar";
//     } else if(grabSUV) {
//         ketqua = "grabSUV";
//     } else if(grabBlack) {
//         ketqua = "grabBlack";
//     }
//     return ketqua;
// }

// function TinhTien() {
//     var soKM = document.getElementById("soKM").value*1;
//     var thoiGianCho = document.getElementById("thoigiancho").value*1;
//     var divThanhTien = document.getElementById("divThanhTien");
//     divThanhTien.style.display = "block";
//     var spanTien = document.getElementById("xuatTien");
//     var LoaiXe = loaiXe();
//     var ketqua = 0;
//     switch(LoaiXe) {
//         case "grabCar":
//             if(soKM <= 1 && thoiGianCho > 3) {
//                 ketqua = soKM*8000 + Math.floor(thoiGianCho/3)*2000;
//             } else if(soKM <= 1 && thoiGianCho <= 3) {
//                 ketqua = soKM*8000;
//             } else if(soKM >1 && soKM <= 19 && thoiGianCho > 3) {
//                 ketqua = 1*8000 + (soKM-1)*7500 + Math.floor(thoiGianCho/3)*2000;
//             } else if(soKM >1 && soKM <= 19 && thoiGianCho <= 3) {
//                 ketqua = 1*8000 + (soKM-1)*7500;
//             } else if(soKM > 19 && thoiGianCho > 3) {
//                 ketqua = 1*8000 + 18*7500 + (soKM-19)*7000 + Math.floor(thoiGianCho/3)*2000;
//             } else if(soKM >1 && soKM <= 19 && thoiGianCho <= 3) {
//                 ketqua = 1*8000 + 18*7500 + (soKM-19)*7000;
//             }
//         break;
//         case "grabSUV":
//             if(soKM <= 1 && thoiGianCho > 3) {
//                 ketqua = soKM*9000 + Math.floor(thoiGianCho/3)*3000;
//             } else if(soKM <= 1 && thoiGianCho <= 3) {
//                 ketqua = soKM*9000;
//             } else if(soKM >1 && soKM <= 19 && thoiGianCho > 3) {
//                 ketqua = 1*9000 + (soKM-1)*8500 + Math.floor(thoiGianCho/3)*3000;
//             } else if(soKM >1 && soKM <= 19 && thoiGianCho <= 3) {
//                 ketqua = 1*9000 + (soKM-1)*8500;
//             } else if(soKM > 19 && thoiGianCho > 3) {
//                 ketqua = 1*9000 + 18*8500 + (soKM-19)*8000 + Math.floor(thoiGianCho/3)*3000;
//             } else if(soKM >1 && soKM <= 19 && thoiGianCho <= 3) {
//                 ketqua = 1*9000 + 18*8500 + (soKM-19)*8000;
//             }
//         break;
//         case "grabCar":
//             if(soKM <= 1 && thoiGianCho >= 3) {
//                 ketqua = soKM*10000 + Math.floor(thoiGianCho/3)*3500;
//             } else if(soKM <= 1 && thoiGianCho < 3) {
//                 ketqua = soKM*10000;
//             } else if(soKM >1 && soKM <= 19 && thoiGianCho >= 3) {
//                 ketqua = 1*10000 + (soKM-1)*9500 + Math.floor(thoiGianCho/3)*3500;
//             } else if(soKM >1 && soKM <= 19 && thoiGianCho < 3) {
//                 ketqua = 1*10000 + (soKM-1)*9500;
//             } else if(soKM > 19 && thoiGianCho >= 3) {
//                 ketqua = 1*10000 + 18*9500 + (soKM-19)*9000 + Math.floor(thoiGianCho/3)*3500;
//             } else if(soKM >1 && soKM <= 19 && thoiGianCho < 3) {
//                 ketqua = 1*10000 + 18*9500 + (soKM-19)*9000;
//             }
//         break;
//          default:
//              alert("Vui lòng chọn loại xe");
//          break;
//     }
//     spanTien.innerHTML = ketqua.toFixed(0);
// }
const GRAB_X_1 = 8000;
const GRAB_X_2 = 7500;
const GRAB_X_3 = 7000;
const GRAB_X_WAIT = 2000;

const GRAB_SUV_1 = 9000;
const GRAB_SUV_2 = 8500;
const GRAB_SUV_3 = 8000;
const GRAB_SUV_WAIT = 3000;

const GRAB_BLACK_1 = 10000;
const GRAB_BLACK_2 = 9500;
const GRAB_BLACK_3 = 9000;
const GRAB_BLACK_WAIT = 3500;

var tienKm_1 = 0;
var tienKm_2 = 0;
var tienKm_3 = 0;
var tienCho = 0;
var tongTien = 0;

function getEle(id) {
    return document.getElementById(id)
}

function layLoaiXe() {
    var grabX = getEle("grabX");
    var grabSUV = getEle("grabSUV");
    var grabBlack = getEle("grabBlack");
    var loaiXe = "";
    if(grabX.checked) {
        loaiXe = "grabX";
    } else if(grabSUV.checked) {
        loaiXe = "grabSUV";
    } else if(grabBlack.checked) {
        loaiXe = "grabBlack"
    }
    return loaiXe
}

function tinhGiaCho(tgCho,giaCho) {
    var ketqua = 0;
    if(tgCho >= 3) {
        ketqua = Math.floor(tgCho/3)*giaCho;
    }
    return ketqua;
}

function tinhTienChiTiet(soKM, tgCho, giaCho, tienGrab_1, tienGrab_2, tienGrab_3) {
    tienCho = tinhGiaCho(tgCho,giaCho);
            if(soKM <= 1 && soKM > 0) {
                tienKm_1 = tienGrab_1;
                tongTien = tienKm_1 + tienCho;
            } else if(soKM > 1 && soKM <= 19) {
                tienKm_1 = tienGrab_1;
                tienKm_2 = (soKM-1) * tienGrab_2;
                tongTien = tienKm_1 + tienKm_2 + tienCho;
            } else if(soKM > 19) {
                tienKm_1 = tienGrab_1;
                tienKm_2 = 18 * tienGrab_2;
                tienKm_3 = (soKM - 19) * tienGrab_3;
                tongTien = tienKm_1 + tienKm_2 + tienKm_3 + tienCho;
            }
}

getEle("btnTinhTien").onclick = function() {
    var loaiXe = layLoaiXe();  
    var soKM = getEle("soKM").value*1;
    var tgCho = getEle("thoigiancho").value*1;
    console.log(soKM, tgCho, loaiXe);
    switch(loaiXe) {
        case "grabX":
            tinhTienChiTiet(soKM, tgCho, GRAB_X_WAIT, GRAB_X_1, GRAB_X_2, GRAB_X_3)
            break;
        case "grabSUV":
            tinhTienChiTiet(soKM, tgCho, GRAB_SUV_WAIT, GRAB_SUV_1, GRAB_SUV_2, GRAB_SUV_3)
            // if(soKM <= 1 && soKM > 0) {
            //     tienKm_1 = GRAB_SUV_1;
            //     tongTien = tienKm_1 + tienCho;
            // } else if(soKM > 1 && soKM <= 19) {
            //     tienKm_1 = GRAB_SUV_1;
            //     tienKm_2 = (soKM-1) * GRAB_SUV_2;
            //     tongTien = tienKm_1 + tienKm_2 + tienCho;
            // } else if(soKM > 19) {
            //     tienKm_1 = GRAB_SUV_1;
            //     tienKm_2 = 18 * GRAB_SUV_2;
            //     tienKm_3 = (soKM - 19) * GRAB_SUV_3;
            //     tongTien = tienKm_1 + tienKm_2 + tienKm_3 + tienCho;
            // }
            break;
        case "grabBlack":
            tienCho = tinhGiaCho(tgCho,GRAB_BLACK_WAIT);
            tinhTienChiTiet(soKM, tgCho, GRAB_BLACK_WAIT, GRAB_BLACK_1, GRAB_BLACK_2, GRAB_BLACK_3)
            // if(soKM <= 1 && soKM > 0) {
            //     tienKm_1 = GRAB_BLACK_1;
            //     tongTien = tienKm_1 + tienCho;
            // } else if(soKM > 1 && soKM <= 19) {
            //     tienKm_1 = GRAB_BLACK_1;
            //     tienKm_2 = (soKM-1) * GRAB_BLACK_2;
            //     tongTien = tienKm_1 + tienKm_2 + tienCho;
            // } else if(soKM > 19) {
            //     tienKm_1 = GRAB_BLACK_1;
            //     tienKm_2 = 18 * GRAB_BLACK_2;
            //     tienKm_3 = (soKM - 19) * GRAB_BLACK_3;
            //     tongTien = tienKm_1 + tienKm_2 + tienKm_3 + tienCho;
            // }
            break;  
        default:
            alert("Vui lòng chọn loại xe");
            break;  
    }    
    console.log(tongTien);

    // Show ket qua
    getEle("divThanhTien").style.display ="block";
    getEle("xuatTien").innerHTML= tongTien;

    // enable button#inHoaDon
    getEle("inHoaDon").disabled = false;
}
getEle("inHoaDon").onclick = function() {
    
}