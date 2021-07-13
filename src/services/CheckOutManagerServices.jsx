import { baseServices } from './baseServices';
export class CheckOutManagerServices extends baseServices {

    constructor() {
        super();
    }
    getListTicketOffice = (maLichChieu) => {
        return this.get(`api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`);
    }
    postTiketChecked = (model) => {
        return this.post(`api/QuanLyDatVe/DatVe`, model)
    }
}

export const checkOutManagerServices = new CheckOutManagerServices();