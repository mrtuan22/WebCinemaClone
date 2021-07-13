import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MultipleRowSlick from '../../../components/RowSlick/MultipleRowSlick.jsx';
import { ListFilmAction } from '../../../redux/actions/ListFilmAction.jsx';
import ModalVideo from 'react-modal-video';
import "react-modal-video/scss/modal-video.scss";
const ListFilm = (props) => {
    const { arrListFilm } = useSelector(state => state.ListFilmReducer);
    console.log("arrListFilm", arrListFilm)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(ListFilmAction());
    }, [])

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-10 mx-auto">

                <MultipleRowSlick arrListFilm={arrListFilm} />

            </div>

        </section>

    )
}

export default ListFilm;