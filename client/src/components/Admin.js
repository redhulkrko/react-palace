import React, { useState, useContext } from "react";
// import DashboardRouter from './DashboardRouter';

import Header from "./Header";
import Footer from "./Footer";

import { MyTestStore } from './App';
import SideNav from "./Side";


const Admin = (props) => {
    const {user, verified, setState} = useContext(MyTestStore)

    return (

    <>
    {/* <Header/> */}
    {/* <SideNav/> */}
    <Footer/>
</>
)};
      
export default Admin;