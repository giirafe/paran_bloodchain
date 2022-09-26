import { RoleBasedKeyring } from "caver-js";
import { Component } from "react";
import { Route } from "react-router-dom";
import Forbidden from './Forbidden';
import isAdmin from './isAdmin';

const RouteIf = ({component: Component, ...rest}) => {
    return (
        <Route
        {...rest}
        render={props => {
            if (!isAdmin) {
                return <Forbidden />
            }

            if (Component) {
                return <Component {...props} />
            }
            
            return null
        }}
        />
    )
}

export default RouteIf;