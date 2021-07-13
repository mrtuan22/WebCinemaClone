import React from 'react';
import { Carousel } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCarouselAction } from '../../../../redux/actions/CarouselAction';
import './HomeCarousel.css';
function onChange(a, b, c) {
    console.log(a, b, c);
}


export const HomeCarousel = (props) => {
    const contentStyle = {
        height: '460px',
        width: '100%',
        color: '#fff',
        lineHeight: '460px',
        textAlign: 'center',
        backgroundSize: '',
        backgroundPosition: 'center',
        backgroundRepeat: 'none',

    };

    const { arrCarousel } = useSelector(state => state.HomeCarouselReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCarouselAction())
    }, [])
    //render carousel
    const renderCarousel = () => {
        return arrCarousel.map((item, index) => {
            return <div style={{ ...contentStyle, backgroundImage: `url(${item.hinhAnh})` }} key={index}>
                <img src={item.hinhAnh} className="w-full" style={{ maxHeight: "460px", objectFit: "cover" }} alt={item.hinhAnh} />
            </div>
        })
    }
    return (
        <Carousel afterChange={onChange}>
            {renderCarousel()}
        </Carousel>
    )
}