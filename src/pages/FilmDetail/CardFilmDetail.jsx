import React from 'react';
import { Fragment } from 'react';
import './CardFilmDetail.scss';
import moment from 'moment';
import { useState } from 'react';
import { Tabs } from 'antd';
import { NavLink } from 'react-router-dom';
import _ from 'lodash';
import { useEffect } from 'react';
import { history } from '../../App';

const { TabPane } = Tabs;
const CarFilmDetail = (props) => {
    const { movieDetail } = props;


    //state menu tab lich chieu
    const [menuState, setMenuState] = useState({
        tabPosition: 'left',
    })
    const { tabPosition } = menuState;

    //xu ly icon movie hot
    const handleHotMovie = () => {
        if (movieDetail.hot) {
            return <div className="flex items-center" >
                <small className="text-red-600 mb-0 mr-1">Hot</small>
                <img src={require("../../assets/Img/starCrop.gif").default} width="50px" />
            </div>
        } else {
            return "";
        }
    }
    const handleStatusFilm = () => {
        if (movieDetail.dangChieu) {
            return <li className="text-red-500 font-bold">Đang chiếu</li>
        } else {
            return <li className="text-red-500 font-bold">Sắp chiếu</li>
        }
    }

    //State thay đổi menu card phim
    const [menuCard, setMenuCard] = useState({
        movieMenu: {
            display: "",
            status: true,
            active: "active"
        },
        showTimesMenu: {
            display: "none",
            status: false,
            active: ""
        }
    })
    let styleMovie = {};
    const [style, setStyle] = useState({
        background: `linear-gradient(to left, black, black, rgba(255, 0, 0, 0), rgba(255, 0, 0, 0)), url(${movieDetail.hinhAnh}), url(https://picsum.photos/1000)`, backgroundPosition: "0px, -50px",
        backgroundRepeat: "no-repeat no-repeat",
        backgroundSize: "100%, 100%",

    })
    //Xu ly background style
    const backGroundStyle = () => {
        if (menuCard.movieMenu.status) {
            setStyle({
                background: `linear-gradient(to left, black, black, rgba(255, 0, 0, 0), rgba(255, 0, 0, 0)), no-repeat center/100% url(${movieDetail.hinhAnh}), url(https://picsum.photos/1000)`,
                //  backgroundPosition: "0px, -50px",
                // backgroundRepeat: "no-repeat no-repeat",
                // backgroundSize: "100%, 100%",
                // contain: "none"
            })
        } else {
            setStyle({});
        }
    }

    //render he thong rap chieu theo id phim
    const renderShowTimes = () => {
        return movieDetail.heThongRapChieu?.map((cinema, index) => {
            return <TabPane key={index} tab={
                <img src={cinema.logo} alt={cinema.logo} width="50px" height="50px" className="rounded-full" />} >

                <Tabs tabPosition={tabPosition} className="mx-auto">

                    {
                        cinema.cumRapChieu?.slice(0, 4).map(
                            (cumRap, index) => {
                                return <TabPane
                                    key={index}
                                    tab={<div className="flex justify-start text-left items-center" >
                                        <img src={cumRap.hinhAnh} className="rounded" width="50px" height="50px" />
                                        <div className="ml-2" style={{ maxWidth: "200px", height: "auto" }}>
                                            <p className="mb-1 font-bold text-white">{cumRap.tenCumRap}</p>
                                            <small className="text-red-50 font-bold " style={{ whiteSpace: "break-spaces", maxWidth: "200px !important", display: "inline-block" }}>{cumRap.diaChi}</small>
                                        </div>
                                    </div>}
                                >

                                    <div className="my-2 flex items-start" >
                                        {

                                            cumRap.lichChieuPhim?.slice(0, 5).map((lich, index) => {

                                                return <button onClick={() => {
                                                    history.push(`/checkout/${lich.maLichChieu}`)
                                                }} key={index} className="m-2 px-5 py-2 font-semibold rounded border-2 border-red-700 bg-red-800 text-white hover:text-red-500 hover:bg-transparent">
                                                    {moment(lich.ngayChieuGioChieu).format("HH:MM A")}
                                                </button>
                                            })
                                        }
                                    </div>


                                </TabPane>
                            }

                        )
                    }
                </Tabs >

            </TabPane >
        })
    }

    //Xu ly phan mo ta qua dai
    const handleMovieDescription = () => {
        if (movieDetail.moTa.length > 250) {
            return `${movieDetail.moTa.slice(0, 250)}...`
        } else {
            return movieDetail.moTa;
        }
    }
    useEffect(() => {
        backGroundStyle()
    }, [movieDetail])
    useEffect(() => {
        backGroundStyle()
    }, [menuCard])
    return (
        <div className="cardFilmDetail" style={style}>
            <div className="card__inner" >
                <header className="card__header">
                    <nav className="card__nav">
                        <ul className="ulCarFilm list list--nav">
                            <li><div className={`card__menu ${menuCard.movieMenu.active}`} onClick={() => {
                                setMenuCard({
                                    movieMenu: {
                                        display: "",
                                        status: true,
                                        active: "active"
                                    },
                                    showTimesMenu: { display: "none", status: false, active: "" }
                                });

                            }

                            }>Movie</div></li>
                            <li><div className={`card__menu ${menuCard.showTimesMenu.active}`} onClick={() => {
                                setMenuCard({
                                    movieMenu: {
                                        display: "none",
                                        status: false,
                                        active: ""
                                    },
                                    showTimesMenu: { display: "", status: true, active: "active" }
                                })

                            }
                            }>Lịch chiếu</div></li>
                            <li><div className="card__menu">Reviews</div></li>
                        </ul>
                    </nav>
                </header>
                <div className="card__movie" style={{ display: menuCard.movieMenu.display }}

                >
                    <main className="card__body" >
                        <div className="card__info">
                            <div className="grid grid-cols-3">
                                <div className="col-span-2">
                                    <h1 className="card__title text-white">{movieDetail.tenPhim}{handleHotMovie()}</h1>
                                </div>

                                <div className={`c100 p${movieDetail.danhGia * 10} small flex items-center`}>
                                    <span className="text-red-500" style={{ fontSize: "20px !important" }}>{movieDetail.danhGia * 10}</span>
                                    <div className="slice">
                                        <div className="bar" />
                                        <div className="fill" />
                                    </div>
                                </div>
                            </div>
                            <p className="card__slug">{handleMovieDescription()} </p>
                            <div className="flex items-center">


                                <button className="card__btn mr-5" value="Watch trailer">Watch trailer</button>
                                {/* <div className="card__rating">
                            8.2
                        </div> */}

                            </div>

                        </div>
                    </main>
                    <footer className="card__footer">
                        <ul className="ulCarFilm list list--info">
                            <li><p className="text-white">Ngày khởi chiếu: <span className="text-yellow-300 font-bold ml-1">{moment(movieDetail.ngayKhoiChieu).format("DD/MM/YYYY")}</span></p></li>
                            {handleStatusFilm()}
                        </ul>
                    </footer>
                </div>
                <div className="card__showTimes" style={{ display: menuCard.showTimesMenu.display }}

                >
                    <Tabs tabPosition={tabPosition} className="mx-auto">
                        {renderShowTimes()}
                    </Tabs>
                </div>

            </div>
        </div >
    )
}

export default CarFilmDetail;