import React from 'react';
import { Fragment } from 'react';
import { Route } from 'react-router';
import { Redirect } from 'react-router-dom';
import { USER_LOGIN } from '../../redux/constaints/UserConstain';


const CheckOutTemp = (props) => {
    const userLogin = localStorage.getItem(USER_LOGIN);
    if (!userLogin) {
        return <Redirect to="/login" />
    }
    const { Component, ...restProps } = props; //bóc tách props
    return (
        <Route {...restProps} render={(propsRouter) => {
            return <Fragment>
                <Component {...propsRouter} />
            </Fragment>

        }}>

        </Route>
    )
}

export default CheckOutTemp;