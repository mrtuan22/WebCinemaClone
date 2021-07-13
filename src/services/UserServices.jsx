import { baseServices } from "./baseServices";


export class UserServices extends baseServices {
    constructor() {
        super();
    }

    postUserLogin = (user) => {
        return this.post("api/QuanLyNguoiDung/DangNhap", user);
    }

    postUserInfomation = () => {
        return this.post("api/QuanLyNguoiDung/ThongTinTaiKhoan");
    }
}

export const userServices = new UserServices();