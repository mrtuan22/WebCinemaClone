import { GET_BANNER } from "../constaints/CarouselConstain"


const initialCarousel = {
    arrCarousel: [
        {
            "maBanner": 1,
            "maPhim": 1282,
            "hinhAnh": "https://s3img.vcdn.vn/123phim/2021/04/trang-ti-16194117174325.jpg"
        },
        {
            "maBanner": 2,
            "maPhim": 1283,
            "hinhAnh": "https://s3img.vcdn.vn/123phim/2021/04/lat-mat-48h-16177782153424.png"
        },
        {
            "maBanner": 3,
            "maPhim": 1284,
            "hinhAnh": "https://s3img.vcdn.vn/123phim/2021/04/ban-tay-diet-quy-evil-expeller-16177781815781.png"
        }
    ]
}

export const HomeCarouselReducer = (state = initialCarousel, action) => {
    switch (action.type) {
        case GET_BANNER: {
            return { ...state, arrCarousel: action.arrCarousel }
        }
        default:
            return { ...state }
    }
}