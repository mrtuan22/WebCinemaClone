import React, { Component } from "react";
import Slider from "react-slick";
import styleSlick from './MultipleRowSlick.module.css';
import CardFilm from "../CardFilm";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_LIST_PHIM_DANG_CHIEU, GET_LIST_PHIM_SAP_CHIEU } from "../../redux/constaints/ListFilmConstain";
import { useEffect } from "react";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} ${styleSlick['slick-prev']}`}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} ${styleSlick['slick-prev']}`}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        >
        </div>
    );
}
const MultipleRowSlick = (props) => {
    const dispatch = useDispatch();
    const { arrListFilm } = props;
    const { dangChieu, sapChieu } = useSelector(state => state.ListFilmReducer);
    const renderListfilm = () => {
        return arrListFilm.map((film, index) => {
            return <div className={`${styleSlick[`width-item`]}`} key={index}>
                <CardFilm film={film} />
            </div>

        })

    }
    const settings = {
        className: "center viriable-width",
        centerMode: true,
        centerPadding: "10px",

        infinite: true,
        speed: 500,
        row: 2,
        slidesPerRow: 10,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        variableWidth: true
    };
    let activeDangChieu = dangChieu === true ? 'active_Film' : 'none_active_Film';
    let activeSapChieu = sapChieu === true ? 'active_Film' : 'none_active_Film';


    return (
        <div>
            <div className="text-center mb-8">
                <button className={`${styleSlick[activeDangChieu]} mx-8 p-3 font-bold `} onClick={() => {
                    let action = {
                        type: GET_LIST_PHIM_DANG_CHIEU
                    }
                    dispatch(action)
                }}>
                    PHIM ĐANG CHIẾU
                </button>
                <button className={`${styleSlick[activeSapChieu]} p-3 font-bold `} onClick={() => {
                    let action = {
                        type: GET_LIST_PHIM_SAP_CHIEU
                    }
                    dispatch(action)
                }}>PHIM SẮP CHIẾU</button>
            </div>

            <Slider {...settings}>
                {renderListfilm()}
            </Slider>
        </div>
    );

}

export default MultipleRowSlick;