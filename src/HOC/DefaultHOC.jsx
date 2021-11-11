import React from "react";
import { Route } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";

const DefaultHOC = ({ component: Component, ...rest }) => {
    return (
        <>
            <Route
                {...rest}
                component={(props) => (
                    <DefaultLayout {...props}>
                        <Component {...props} />
                    </DefaultLayout>
                )}
            />
        </>
    );
};

export default DefaultHOC;