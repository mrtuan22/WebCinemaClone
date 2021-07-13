import React from 'react';
import { HomeCarousel } from '../../templates/HomepageTemp/Layout/HomeCarousel/HomeCarousel';
import HomeMenu from './HomeMenu/HomeMenu';
import ListFilm from './ListFilm/ListFilm';


export const Home = (props) => {
    return (
        <div className="">
            <HomeCarousel />
            <div>
                <ListFilm />
            </div>
            <div className="mx-28">
                <HomeMenu />
            </div>

        </div>
    )
}