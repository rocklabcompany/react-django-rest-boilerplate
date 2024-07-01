import React from "react";
import swal from "sweetalert";

import { connect } from "react-redux";
import { Container } from "reactstrap";
import { LoginForm } from "../../components/Forms/LoginForm/index";

import { login } from "../../api/queries/index";
import { useNavigate } from "react-router";
import {saveData} from "../../utils";

const Login = (props) => {
  const navigate = useNavigate();
  const handleLogin = async (values) => {
    try {
      await login(values)
        .then((response) => {
          if (response?.data) {
            props.dispatch({ type: "SET_TOKEN", payload: response.data.key });
            saveData("token", response?.data?.key)
            navigate("/dashboard");
          }
        })
        .catch((error) => {
          console.log(error);
          const errors = {};
          const errorData = error?.response?.data;
          for (const key in errorData) {
            if (errorData.hasOwnProperty(key)) {
              const element = errorData[key];
              errors[key] = element.toString();
            }
          }
          swal({
            icon: "error",
            title: "Ooops something wrong!",
            text: errors?.non_field_errors,
          });
        });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Container>
      <LoginForm login={handleLogin}></LoginForm>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  data: state.user,
});

export default connect(mapStateToProps)(Login);
