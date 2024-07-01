import React from "react";
import { isAuth } from "../../hoc/isAuth";
import NavBar from "../NavBar";
import SideBar from "../SideBar";
import Footer from "../Footer";
import { Outlet } from "react-router-dom";
import "../../index.css";

const Dashboard = ({ children }) => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-3 col-lg-2">
        <SideBar />
      </div>
      <div className="col-md-9 col-lg-10">
        <NavBar />
        <Outlet />
        <Footer />
      </div>
    </div>
  </div>
);

export default isAuth(Dashboard);
