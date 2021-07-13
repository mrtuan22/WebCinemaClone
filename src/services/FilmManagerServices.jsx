
import React from 'react';
import { GP } from '../util/settings/config';
import { baseServices } from './baseServices';


export class FilmManagerServices extends baseServices {
    constructor() {
        super();
    }
    getListFilm = () => {
        return this.get(`api/QuanLyPhim/LayDanhSachPhim?maNhom=${GP}`);
    }

}



export const filmManagerServices = new FilmManagerServices();