import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import { Header } from './Layout/Header/Header';

import Footer from './Layout/Footer/Footer';


const HomeTemplate = (props) => {
    const { Component, ...restProps } = props;
    return (
        <Route {...restProps} render={(propsRoute) => { //props.location, props.history, props.match
            return <Fragment>
                <Header />


                <Component {...propsRoute} />

                {/* //Footer */}
                <Footer />
            </Fragment>
        }}>

        </Route>
    );
};

export default HomeTemplate;