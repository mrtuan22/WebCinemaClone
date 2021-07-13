import { GP } from "../util/settings/config";
import { baseServices } from "./baseServices"

class CinemaManagerServices extends baseServices {

    constructor() {
        super();
    }
    getCinemaSystem = () => {
        return this.get(`api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GP}`);
    }
    getMovieShowtimeInfomation = (idFilm) => {
        return this.get(`api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${idFilm}`);
    }
    getCinemaInfo = () => {
        return this.get(`api/QuanLyRap/LayThongTinHeThongRap`);
    }
}

export const cinemaManagerServices = new CinemaManagerServices();