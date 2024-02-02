import Auth from "../context/Auth";
import React from "react";
import { useContext } from "react";
import { Route } from "react-router-dom";
import { redirect } from "react-router-dom";
import { Navigate } from "react-router-dom";


const AuthenticatedRoute = ({ element }) => {
    const { isAuthenticated } = useContext(Auth);

    return isAuthenticated ? element : <Navigate to="/userProfile" />;
};

export default AuthenticatedRoute;