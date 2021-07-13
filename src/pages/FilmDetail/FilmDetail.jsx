import React from 'react';
import { CustomCard } from '@tsamantanis/react-glassmorphism'
import '@tsamantanis/react-glassmorphism/dist/index.css'
import CarFilmDetail from './CardFilmDetail';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovieShowtimeInfomationAction } from '../../redux/actions/MovieTheaterAction';


function FilmDetail(props) {
    const filmId = props.match.params.id;
    //lấy thông tin phim từ reducer
    const { movieDetail } = useSelector(state => state.MovieTheaterReducer);

    const dispatch = useDispatch();
    //Dispatch action get thông tin phim lên reducer
    useEffect(() => {
        dispatch(getMovieShowtimeInfomationAction(filmId));
    }, []);

    return (
        <div className="" style={{ background: `url(${movieDetail.hinhAnh}), url(https://picsum.photos/1000)`, minHeight: "100vh", backgroundSize: "100% 100vh", backgroundRepeat: "no-repeat" }} >
            <CustomCard
                style={{ paddingTop: "150px", minHeight: "100vh" }}
                effectColor="rgba(255,255,255,0.4)" // required
                color="rgba(255,255,255,0.4)" // default color is white
                blur={15} // default blur value is 10px
                borderRadius={0} // default border radius value is 10px
            >
                <CarFilmDetail movieDetail={movieDetail} />
            </CustomCard>
        </div>

    );
}

export default FilmDetail;