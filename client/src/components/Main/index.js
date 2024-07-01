import React from "react";
import { isAuth } from "../../hoc/isAuth";
import NavBar from "../NavBar";
import SideBar from "../SideBar";
import Footer from "../Footer";
import { Outlet } from "react-router-dom"

import "../../index.css";

const Dashboard = ({ children }) => (
  <div className="flexible-content">
    <SideBar />
    <div className="main-container">
      <NavBar />
      <main id="content" className="p-5">
        <Outlet />
      </main>
      <Footer />
    </div>
  </div>
);

export default isAuth(Dashboard);
