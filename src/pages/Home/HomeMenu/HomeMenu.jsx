import React from 'react';
import { Tabs } from 'antd';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCinemaSystem } from '../../../redux/actions/MovieTheaterAction';
import { NavLink } from 'react-router-dom';
import moment from 'moment';
import { Fragment } from 'react';
// import 'node_modules/react-modal-video/scss/modal-video.scss';
const { TabPane } = Tabs;
function HomeMenu(props) {
    const [menuState, setMenuState] = useState({
        tabPosition: 'left',
    })

    //State mở popup trailer
    const [isOpen, setOpen] = useState(false)
    const dispatch = useDispatch();
    const { arrMovieTheater } = useSelector(state => state.MovieTheaterReducer);



    const changeTabPosition = e => {
        setMenuState({ tabPosition: e.target.value });
    };
    const { tabPosition } = menuState;

    useEffect(() => {
        dispatch(getCinemaSystem());
    }, [])

    const xuLyStatusPhim = (status) => {
        if (status) {
            return <p className="text-red-500 font-bold ml-5">Đang Chiếu</p>
        } else {
            return <p className="text-red-500 font-bold ml-5">Sắp Chiếu</p>
        }
    }

    const renderArrMovieTheater = () => {
        return arrMovieTheater?.map((cinema, index) => {
            return <TabPane key={index} tab={<img src={cinema.logo} className="rounded-full" width="50px" height="50px" />} >
                <Tabs tabPosition={tabPosition} className="mx-auto">
                    {cinema.lstCumRap?.slice(0, 4).map((cumRap, index) => {
                        return <TabPane tab={
                            <div className="flex justify-start text-left items-center" style={{ maxWidth: "300px", whiteSpace: "break-spaces" }} >
                                <img src={cumRap.hinhAnh} className="rounded" width="50px" height="50px" />
                                <div className="ml-2">
                                    <p className="mb-1 font-bold">{cumRap.tenCumRap}</p>
                                    <small className="text-red-500">{cumRap.diaChi}</small>
                                </div>
                            </div>
                        } key={index}>
                            {cumRap.danhSachPhim?.slice(0, 4).map((film, index) => {
                                return <Fragment key={index}>
                                    <div className="my-2 flex items-start grid grid-cols-4" >
                                        <div className="">
                                            <img src={film.hinhAnh} alt={film.hinhAnh} width="100px" onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src = "https://picsum.photos/100"
                                            }} />
                                        </div>
                                        <div className="col-span-3">
                                            <div className="flex items-center">
                                                <p className="text-left ml-2 font-bold text-xl" style={{ marginBottom: "14px" }}>{film.tenPhim}</p>
                                                {xuLyStatusPhim(film.dangChieu)}
                                            </div>
                                            {film.lstLichChieuTheoPhim?.slice(0, 12).map((lichChieu, index) => {
                                                return <NavLink to={`/checkout/${lichChieu.maLichChieu}`} style={{ display: "inline-block" }} key={index} className="m-2 px-5 py-2 font-semibold rounded border-2 border-red-700 bg-red-800 text-white hover:text-red-500 hover:bg-transparent">
                                                    {/* Dùng thư viện moment để tách thời gian */}
                                                    {moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}
                                                </NavLink>
                                            })}
                                        </div>

                                    </div>
                                    <hr />
                                </Fragment>
                            })}
                        </TabPane>
                    })}

                </Tabs>
            </TabPane>
        })
    }

    return (
        <div className=" py-10">
            <Tabs tabPosition={tabPosition} className="mx-auto">

                {renderArrMovieTheater()}

            </Tabs>
        </div>
    );
}

export default HomeMenu;