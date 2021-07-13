import { cinemaManagerServices } from "../../services/CinemaManagerServices"
import { STATUS } from "../../util/settings/config";
import { GET_CINEMA_INFO, GET_CINEMA_SYSTEM, GET_MOVIE_SHOWTIME_INFOMATION } from "../constaints/MovieTheaterConstains";


//Lấy hệ thống rạp
export const getCinemaSystem = () => {
    return async (dispatch) => {
        try {
            const { data, status } = await cinemaManagerServices.getCinemaSystem();
            if (status === 200) {
                dispatch({
                    type: GET_CINEMA_SYSTEM,
                    arrCinemaSystem: data.content
                })
            }
        } catch (errors) {
            console.log("Movie Theater Action: ", errors)
        }
    }
}

//Lấy thông tin lịch chiếu phim theo mã phim

export const getMovieShowtimeInfomationAction = (idFilm) => {
    return async (dispatch) => {
        try {
            const { data, status } = await cinemaManagerServices.getMovieShowtimeInfomation(idFilm);
            if (status === STATUS.SUCCESS) {
                dispatch({
                    type: GET_MOVIE_SHOWTIME_INFOMATION,
                    movieDetail: data.content
                })
            }

        } catch (errors) {
            console.log("getMovieShowtimeInfomationAction errors: ", errors)
        }
    }
}

//Lấy thông tin hệ thống các rạp chiếu phim
export const getCinemaInfoAction = () => {
    return async dispatch => {
        try {
            const { data, status } = await cinemaManagerServices.getCinemaInfo();
            if (status === STATUS.SUCCESS) {
                dispatch({
                    type: GET_CINEMA_INFO,
                    arrCinemaInfo: data.content
                })
            }
        } catch (error) {
            console.log("getCinemaInfoAction: ", error)
        }
    }
}