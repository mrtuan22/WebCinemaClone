import React from 'react';
import { useSelector } from 'react-redux';
import styleLoading from './Loading.module.css';

function Loading(props) {
    const { isValid } = useSelector(state => state.LoadingReducer);
    if (isValid) {
        return (
            <div className={styleLoading.bgLoading}>
                <img src={require("../../../assets/Img/Loading.gif").default} alt="assets/Img/Loading.gif" />
            </div >
        );
    } else {
        return "";
    }

}

export default Loading;