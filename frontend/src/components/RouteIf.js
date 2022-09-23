import { Component } from "react";
import { Route } from "react-router-dom";
import Forbidden from './Forbidden'

const RouteIf = ({component: Component, ...rest}) => {
    return (
        <Route
        {...rest}
        render={props => {
            if (true) {
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