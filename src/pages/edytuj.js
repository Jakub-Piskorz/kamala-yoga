import React, { useEffect } from "react";
import {redirectTo} from "@reach/router";

const Edytuj = () => {
    useEffect(() => {
        redirectTo("http://yogakamala.jakubpiskorz.pl/wp-admin");
    }, []);
    return <h1>Redirecting...</h1>
};

export default Edytuj;