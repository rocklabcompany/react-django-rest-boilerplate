import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { verifyToken, getMe } from "../api/queries/index";
import { useNavigate } from "react-router";
export const notAuth = (WrappedComponent) => {
  const AuthComponent = (props) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await verifyToken();
          const me = await getMe(localStorage.getItem("token"));
          setUser(me.data);
          if (response?.data?.verified) {
            navigate("/dashboard");
          }
        } catch (error) {
          navigate("/login");
        }
      };
      fetchData();
    }, [navigate]);
    return <WrappedComponent {...props} user={user} />;
  };

  const mapStateToProps = (state) => ({
    data: state.user,
  });

  return connect(mapStateToProps, null)(AuthComponent);
};
