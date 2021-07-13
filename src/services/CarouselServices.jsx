import { extend } from "lodash";
import { baseServices } from "./baseServices";


export class CarouselServices extends baseServices {

    constructor() {
        super();
    }
    getCarouselServices = () => {
        return this.get('api/QuanLyPhim/LayDanhSachBanner');
    }
}

export const carouselServices = new CarouselServices();