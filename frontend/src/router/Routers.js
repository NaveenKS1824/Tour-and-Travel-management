import React from "react";
import {Routes,Route,Navigate} from 'react-router-dom';
import Home from "../pages/Home";
import Tour from "../pages/Tours";
import TourDetailsList from "../pages/TourDetails";
import Login from "../pages/Login";
import Register from "../pages/Register";
import SearchResultList from "../pages/SearchResultList";

const Routers = () => {
    return(
        <Routes>
            <Route path="/" element={<Navigate to="/home"/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/tours" element={<Tour/>}/>
            <Route path="/tours/:id" element={<TourDetailsList/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/tours/search" element={<SearchResultList/>}/>
        </Routes>
    )
}
export default Routers;