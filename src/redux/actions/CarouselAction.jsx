
import { delay } from 'lodash';
import { carouselServices } from '../../services/CarouselServices';

import { GET_BANNER } from '../constaints/CarouselConstain';
import { HIDE_LOADING, LOADING } from '../constaints/LoadingConstain';

export const getCarouselAction = () => { //action la function
    return async (dispatch) => { //function tra ve 1 function su dung async ...await de goi API

        try { //su dung reudx thunk (cai middleware) de co the truyen ham dispatch
            const { data, status } = await carouselServices.getCarouselServices();

            dispatch({
                type: GET_BANNER,
                arrCarousel: data.content
            })
        } catch (errors) {
            console.log("Errors Carousel ACtion: ", errors)
        }

    }

}