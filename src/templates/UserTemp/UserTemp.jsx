import { Fragment } from "react";
import { Route } from "react-router-dom";
import RightBGUserTemp from "./RightBGUserTemp";


const UserTemp = (props) => {
    const { Component, ...restProps } = props;
    return (
        <Route {...restProps} render={(propsRouter) => {
            return <Fragment>
                <div className="lg:flex" >
                    <Component {...propsRouter} />
                    <RightBGUserTemp />
                </div>

            </Fragment>
        }} />
    )
}

export default UserTemp;