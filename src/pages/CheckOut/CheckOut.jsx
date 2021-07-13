
import React, { Fragment, useEffect, useState, } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Seat.css';
import { getListTicketOfficeWithIdMaLichChieuAction, postTiketChekedAction } from '../../redux/actions/CheckOutAction';
import _ from 'lodash';
import './styleHinhThang.css';
import { ADD_CHECKING } from '../../redux/constaints/CheckOutConstain';
import { UserOutlined } from '@ant-design/icons';
import { Tabs } from 'antd';
import { userInfomationAction } from '../../redux/actions/UserAction';
import moment from 'moment';
import { CustomCard } from '@tsamantanis/react-glassmorphism';
import { NavLink } from 'react-router-dom';
import { history } from '../../App';
const CheckOut = (props) => {
    const dispatch = useDispatch();
    //lấy thông tin người dùng
    const { userLogin } = useSelector(state => state.UserReducer);

    //Lấy danh sách ghê đang đặt
    const { arrChecking } = useSelector(state => state.CheckOutReducer);

    console.log("arrChecking: ", arrChecking)
    const idLichChieu = props.match.params.id;
    //lấy thông tin phòng vé
    const ticketOffice = useSelector(state => state.CheckOutReducer.ticketOffice);
    const { thongTinPhim, danhSachGhe } = ticketOffice;
    //Lấy thông tin vé đang đặt để gửi lên SV
    const bookTicket = {
        maLichChieu: idLichChieu,
        danhSachVe: [

        ]
    }
    console.log("userLogin", userLogin)

    //state load trang
    const [status, setStatus] = useState(true)

    useEffect(() => {
        dispatch(getListTicketOfficeWithIdMaLichChieuAction(idLichChieu))
    }, [status])

    //Render danh sách ghế trong rạp
    const renderSeatList = () => {
        return danhSachGhe?.map((seatItem, index) => {
            // console.log("seatItem", seatItem)
            let seatTypeClass = seatItem.loaiGhe === "Vip" ? "seat seat__type--vip" : "seat";
            let seatStatusClass = seatItem.daDat ? "seat__checked" : "";
            let indexChecking = arrChecking?.findIndex((seat) => seatItem.maGhe === seat.maGhe);
            let checkingClass = indexChecking !== -1 ? "seat__checking" : "";
            let myCheckClass = userLogin.taiKhoan === seatItem.taiKhoanNguoiDat ? "my__seat" : "";
            return <Fragment key={index}>

                <button disabled={seatItem.daDat}
                    className={`font-bold mx-1 my-3 hover:bg-red-500 
                 ${seatTypeClass} ${seatStatusClass} ${checkingClass} ${myCheckClass}`}
                    onClick={() => {
                        dispatch({
                            type: ADD_CHECKING,
                            seatItem: seatItem
                        })
                    }}
                >{seatItem.stt}</button>

                {(index + 1) % 16 === 0 ? <br /> : ""}

            </Fragment>

        })
    }
    return (
        <div className=" min-h-screen">
            <div className="grid grid-cols-12 my-5 mx-5">
                <div className="col-span-9 text-center flex flex-col items-center">
                    <div className="bg-black mb-2" style={{ height: "10px", width: " 80% " }}>
                    </div>
                    <div className="trapezoid"> <p className="text-red-500 mt-5">Màn hình</p></div>
                    <div className="checkOut__seat mt-3">
                        {renderSeatList()}
                    </div>
                    <div className="flex flex-col">
                        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                <div className="    ">
                                    <table className="min-w-full divide-y divide-gray-800">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Chưa đặt</th>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Đang đặt</th>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Đã đặt</th>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Bạn đặt</th>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Ghế thường</th>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Ghế VIP</th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-6 py-4 whitespace-nowrap" ><div className="seat mx-auto">
                                                    <UserOutlined />
                                                </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap"><div className="seat seat__checking mx-auto">
                                                    <UserOutlined />
                                                </div></td>
                                                <td className="px-6 py-4 whitespace-nowrap"><div className="seat seat__checked mx-auto">
                                                    <UserOutlined />
                                                </div></td>
                                                <td className="px-6 py-4 whitespace-nowrap mx-auto"><div className="seat my__seat mx-auto">
                                                    <UserOutlined />
                                                </div></td>
                                                <td className="px-6 py-4 whitespace-nowrap mx-auto"><div className="seat mx-auto">
                                                    <UserOutlined />
                                                </div></td>
                                                <td className="px-6 py-4 whitespace-nowrap  mx-auto"><div className="seat seat__type--vip mx-auto">
                                                    <UserOutlined />
                                                </div></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>


                </div >
                <div className="col-span-3">

                    <p className="text-red-500 font-bold text-xl text-center">{
                        arrChecking.reduce((tongTien, item, index) => {
                            return tongTien += item.giaVe;
                        }, 0).toLocaleString()
                    } VNĐ</p>
                    <hr />
                    <div className="my-5">
                        <p className="font-bold text-xl">Lật mặt</p>
                        <p>Cụm rạp: {thongTinPhim?.tenCumRap}</p>
                        <p>Địa điểm: {thongTinPhim?.diaChi}</p>
                        <p>Ngày chiếu: {thongTinPhim?.ngayChieu} - {thongTinPhim?.gioChieu} {thongTinPhim?.tenRap}</p>
                    </div>

                    <hr />
                    <div className="grid grid-cols-5 items-center my-5 justify-between font-bold">
                        <p className="text-red-500 col-span-1">Ghế: </p>
                        <div className="col-span-4">
                            {
                                _.sortBy(arrChecking, 'maGhe').map((seat, index) => {
                                    return <Fragment key={index}>
                                        <span className="text-black text-center mx-1 mb-5 px-1 rounded seat__checking" style={{ display: "inline-block" }} >{seat.stt}</span>
                                        {(index + 1) % 6 === 0 ? <br className="" style={{ height: "10px" }} /> : ""}
                                    </Fragment>
                                })
                            }
                        </div>


                    </div>
                    <hr />
                    <div className="my-5">
                        <p className="font-bold">Email:</p>
                        <p>{userLogin.email}</p>
                    </div>

                    <hr />
                    <div className="my-5">
                        <p className="font-bold">Phone:</p>
                        <p>{userLogin.soDT}</p>
                    </div>

                    <div className="flex flex-col justify-center m-auto">
                        <button className="px-8 py-3 text-white text-xl font-bold font-semibold rounded bg-red-500 hover:bg-green-500 text-coolGray-100 " onClick={() => {
                            bookTicket.danhSachVe = arrChecking;
                            console.log("bookTicket", bookTicket)
                            dispatch(postTiketChekedAction(bookTicket));

                        }}>
                            Đặt vé</button>
                    </div>


                </div>
            </div >

        </div >
    )
}





const { TabPane } = Tabs;

export default function (props) {
    return <div className="p-5" style={{ background: `url(https://thuthuatnhanh.com/wp-content/uploads/2020/03/hinh-nen-pokemon-cute-840x473.jpg), url(https://picsum.photos/1000)`, minHeight: "100vh", backgroundSize: "100% 100vh", backgroundRepeat: "no-repeat" }} >
        <CustomCard
            style={{ minHeight: "100vh" }}
            effectColor="rgba(255,255,255,0.4)" // required
            color="rgba(255,255,255,0.4)" // default color is white
            blur={25} // default blur value is 10px
            borderRadius={0} // default border radius value is 10px
        >
            <div className="flex">
                <Tabs defaultActiveKey="1">
                    <TabPane tab={<p className="text-red-400 font-bold text-xl">01. CHỌN GHẾ VÀ THANH TOÁN</p>} key="1">
                        <CheckOut {...props} />
                    </TabPane>
                    <TabPane tab={<p className="text-red-400 font-bold text-xl">02. LỊCH SỬ ĐẶT VÉ</p>} key="2">
                        <HistoryBookedTicket />
                    </TabPane>
                    <TabPane tab={<p className="text-red-400 font-bold text-xl" onClick={() => {
                        history.push("/home")
                    }}>Home</p>}>

                    </TabPane>
                </Tabs>

            </div>


        </CustomCard>
    </div>


}


const HistoryBookedTicket = (props) => {
    const dispatch = useDispatch();
    const { userLogin, userInfo } = useSelector(state => state.UserReducer);
    console.log("userInfo: ", userInfo);
    useEffect(() => {
        dispatch(userInfomationAction());
    }, [])

    const renderHistoryBookedTicket = () => {
        return userInfo?.thongTinDatVe?.map((infoItem, index) => {
            return <div className="p-2 lg:w-1/3 md:w-1/2 w-full" key={index}>
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                    <img alt={infoItem.hinhAnh} className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={infoItem.hinhAnh} onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://picsum.photos/100"
                    }} />
                    <div className="flex-grow">
                        <div className="grid grid-col-2">
                            <div>   <h2 className="text-gray-900 title-font font-xl">{infoItem.tenPhim}</h2>
                                <p className="text-gray-500">{infoItem.danhSachGhe[0]?.tenHeThongRap}</p>
                                <p>{infoItem.danhSachGhe[0]?.tenRap}</p>
                                <p>Ngày đặt: {moment(infoItem.ngayDat).format("DD/MM/YYYY")} - {moment(infoItem.ngayDat).format("hh:mm A")}</p>
                            </div>
                            <div>
                                <p>Ghế: {_.sortBy(infoItem.danhSachGhe, "maGhe")?.map((seatItem, index) => {
                                    return <Fragment key={index}>
                                        <span className="mx-2" style={{ display: "inline-block" }}>{seatItem.tenGhe}</span>
                                    </Fragment>
                                })
                                }

                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        })
    }
    return <section className="text-gray-600 body-font">
        <div className="container px-5 py-14 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-black">Xin chào {userLogin.hoTen}</h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-black">Chúc quý khách xem phim vui vẻ</p>
            </div>
            <div className="flex flex-wrap -m-2">

                {renderHistoryBookedTicket()}
            </div>
        </div>
    </section>

}