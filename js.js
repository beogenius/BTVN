
    var NhapLuong = document.getElementById("NhapLuong");
    var NhanLuong = document.getElementById("NhanLuong");
    var Luong1 = document.getElementById("Luong1");
    var Tongluong
    NhanLuong.addEventListener("click",Run)
    function Run(){
    if (parseInt(NhapLuong.value)<10000000){
    Luong1thang = NhapLuong.value
}else if(10000000<=parseInt(NhapLuong.value) && parseInt(NhapLuong.value) <50000000){
    Luong1thang = NhapLuong.value * 0.9
}else if(parseInt(NhapLuong.value)>50000000){
    Luong1thang = NhapLuong.value * 0.8 * 0.9
}
    function TongluongSalary(){
    bacLuong = document.getElementById("bacLuong");
    if (bacLuong.value == "bac1"){
    Tongluong = Luong1thang * 6 + Luong1thang * 0.9 * 3 + Luong1thang * 0.8 * 3
    alert(Tongluong)
    Luong1.innerHTML = "Tổng lương 1 năm " + Tongluong
}else if (bacLuong.value == "bac2"){
    Tongluong = Luong1thang * 3 + Luong1thang * 0.9 * 3 + Luong1thang * 0.8 * 6
    alert(Tongluong)
    Luong1.innerHTML = "Tổng lương 1 năm " + Tongluong
}
}
    TongluongSalary();
}

