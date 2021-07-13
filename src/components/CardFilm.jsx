import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './FlipCard.css';
import ModalVideo from 'react-modal-video';
import "react-modal-video/scss/modal-video.scss";
import Modal from 'antd/lib/modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
// import './modal-video.scss';
function CardFilm(props) {

    const item = props.film;

    const xuLyText = () => {
        let text = item.moTa;
        if (text.length > 100) {
            text = text.slice(0, 100) + "..."
        }
        return text;
    }
    const dispatch = useDispatch();
    const { idYB } = useSelector(state => state.YouTuBeIdReducer);
    //State mở popup trailer
    const [isOpen, setOpen] = useState(false);
    //Lấy ID từ video youtube
    // const getYoutubeID = (url) => {
    //     let ID = '';

    //     url = url.replace(/(>|<)/gi, '').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
    //     if (url[2] !== undefined) {
    //         ID = url[2].split(/[^0-9a-z_\-]/i);
    //         ID = ID[0];
    //     }
    //     else {
    //         ID = url;
    //     }
    //     return ID
    // }


    const [isModalVisible, setIsModalVisible] = useState(
        false);
    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };





    return (
        <div className="card card-film">
            <a href="#">
                <div className="img1" style={{ backgroundImage: `url(${item.hinhAnh}), url(https://picsum.photos/390)` }} />
                <div className="img2" style={{ backgroundImage: `url(${item.hinhAnh}), url(https://picsum.photos/390` }} />
                <div className="title">{item.tenPhim}</div>
                <div className="text">{xuLyText()}</div>
            </a>


            {/* <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={idYB} onClose={() => setOpen(false)} /> */}
            <Modal destroyOnClose={true} title={item.tenPhim} width={800} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <iframe src={item.trailer} title={item.tenPhim} height="500px" width="100%"></iframe>
            </Modal>
            <button className="catagory" onClick={() => {
                showModal()
            }}>Trailer <i className="fas fa-film" />
            </button>

            <div className="views">
                <NavLink to={`/filmdetail/${item.maPhim}`}>
                    Xem<i className="far fa-eye" />
                </NavLink>
            </div>

        </div>

    );
}

export default CardFilm;