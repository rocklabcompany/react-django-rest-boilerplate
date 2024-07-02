import React, { Component, lazy, Suspense } from "react";

import * as path from "constants/routes";
import Main from "components/Main";
import Loader from "components/Loader";

import Home from "pages/Home/index";
import Login from "pages/Login/index";
import SignUp from "pages/SignUp/index";
import PageNotFound from "components/PageNotFound";

import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import { ChakraProvider } from "@chakra-ui/react";
import appReducer from "redusers/index.js";
const Dashboard = lazy(() => import("./pages/Dashboard/index"));
const Tasks = lazy(() => import("./pages/Dashboard/Tasks"));
const Profile = lazy(() => import("./pages/Dashboard/Profile"));
const ConfirmEmail = lazy(() => import("./pages/ConfirmEmail"));
const ResetPassword = lazy(() => import("./pages/ResetPassword"));
const store = createStore(appReducer);

const App = () => {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <Provider store={store}>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path={path.HOME} element={<Home />} />
              <Route path={path.SIGN_IN} element={<Login />} />
              <Route path={path.SIGN_UP} element={<SignUp />} />
              <Route element={<Main />}>
                <Route path={path.DASHBOARD} element={<Dashboard />} />
                <Route path={path.TASKS} element={<Tasks />} />
                <Route path={path.PROFILE} element={<Profile />} />
                <Route path={path.CONFIRM_EMAIL} element={<ConfirmEmail />} />
                <Route path={path.RESET_PASSWORD} element={<ResetPassword />} />
                <Route path="*" element={<PageNotFound />} />
              </Route>
            </Routes>
          </Suspense>
        </Provider>
      </ChakraProvider>
    </BrowserRouter>
  );
};

export default App;
