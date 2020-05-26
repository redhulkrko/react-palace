import React, { useState, useContext } from "react";
// import DashboardRouter from './DashboardRouter';

import Header from "./xHeader";
import Footer from "./xFooter";

import { MyTestStore } from './App';
import SideNav from "./xSide";


const Admin = (props) => {
    const {user, setState} = useContext(MyTestStore)

    return (

    <>
    <Header/>
    <SideNav/>
    <Footer/>
</>
)};
      
export default Admin;