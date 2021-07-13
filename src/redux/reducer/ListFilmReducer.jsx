import { GET_LIST_FILM, GET_LIST_PHIM_DANG_CHIEU, GET_LIST_PHIM_SAP_CHIEU } from "../constaints/ListFilmConstain";


const initialListFilm = {
    arrListFilm: [
        {
            "maPhim": 1323,
            "tenPhim": "Secretary Ki",
            "biDanh": "secretary-ki",
            "trailer": "https://www.youtube.com/embed/-ir2IflOHv4",
            "hinhAnh": null,
            "moTa": "What's Wrong with Secretary Kim? \nis a 2018 South Korean television series starring Park Seo-joon and Park Min-young. It is based on the novel of the same title by Jung Kyung-yoon which was first published in 2013, \nwhich was then serialized into a comic in 2015 via KakaoPage. \nThe series aired on tvN from June 6 to July 26, 2018, on Wednesdays and Thursdays for 16 episodes.",
            "maNhom": "GP10",
            "ngayKhoiChieu": "2021-05-28T00:00:00",
            "danhGia": 10,
            "hot": false,
            "dangChieu": true,
            "sapChieu": false
        }
    ],
    dangChieu: true,
    sapChieu: false,
    arrListFilmDefault: [
        {
            "maPhim": 1323,
            "tenPhim": "Secretary Ki",
            "biDanh": "secretary-ki",
            "trailer": "https://www.youtube.com/embed/-ir2IflOHv4",
            "hinhAnh": null,
            "moTa": "What's Wrong with Secretary Kim? \nis a 2018 South Korean television series starring Park Seo-joon and Park Min-young. It is based on the novel of the same title by Jung Kyung-yoon which was first published in 2013, \nwhich was then serialized into a comic in 2015 via KakaoPage. \nThe series aired on tvN from June 6 to July 26, 2018, on Wednesdays and Thursdays for 16 episodes.",
            "maNhom": "GP10",
            "ngayKhoiChieu": "2021-05-28T00:00:00",
            "danhGia": 10,
            "hot": false,
            "dangChieu": true,
            "sapChieu": false
        }
    ]
}

const ListFilmReducer = (state = initialListFilm, action) => {
    switch (action.type) {
        case GET_LIST_FILM: {
            state.arrListFilm = action.arrListFilm.filter(film => film.dangChieu === true && film.sapChieu === false);
            return { ...state, arrListFilmDefault: action.arrListFilm };
        }
        case GET_LIST_PHIM_SAP_CHIEU: {
            state.dangChieu = false;
            state.sapChieu = true;
            state.arrListFilm = state.arrListFilmDefault.filter(film => film.dangChieu === state.dangChieu && film.sapChieu === state.sapChieu);
            return { ...state };
        }
        case GET_LIST_PHIM_DANG_CHIEU: {
            state.sapChieu = false;
            state.dangChieu = true;
            state.arrListFilm = state.arrListFilmDefault.filter(film => film.dangChieu === state.dangChieu && film.sapChieu === state.sapChieu);
            return { ...state };
        }
        default:
            return { ...state }
    }
}

export default ListFilmReducer;