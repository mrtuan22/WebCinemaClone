import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import CheckOutReducer from './reducer/CheckOutReducer';
import { HomeCarouselReducer } from './reducer/HomeCarouselReducer';
import ListFilmReducer from './reducer/ListFilmReducer';
import LoadingReducer from './reducer/LoadingReducer';
import MovieTheaterReducer from './reducer/MovieTheaterReducer';
import UserReducer from './reducer/UserReducer';
import { YouTuBeIdReducer } from './reducer/YouTuBeIdReducer';

const rootReducer = combineReducers({
    //state ung dung
    HomeCarouselReducer,
    ListFilmReducer,
    //Loading
    LoadingReducer,
    MovieTheaterReducer: MovieTheaterReducer,
    //User
    UserReducer,
    //Checkout
    CheckOutReducer,
    YouTuBeIdReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk));