import { filmManagerServices } from "../../services/FilmManagerServices"
import { GET_LIST_FILM } from "../constaints/ListFilmConstain";
import { HIDE_LOADING, LOADING } from "../constaints/LoadingConstain";


export const ListFilmAction = () => { //action la mot function tra ve 1 function duoc xu ly trong qua trinh middleware
    return async (dispatch) => {


        try {
            const { data, status } = await filmManagerServices.getListFilm();
            dispatch({
                type: GET_LIST_FILM,
                arrListFilm: data.content
            })
        } catch (errors) {
            console.log("ListFilm ACtion error: ", errors)
        }

    }

}