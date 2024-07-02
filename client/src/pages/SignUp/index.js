import React from "react";

import * as path from "constants/routes";
import { SignUpForm } from "components/Forms/SignUpForm";
import swal from "sweetalert";
import { signUp } from "api/queries/index.js";
import { Flex } from "@chakra-ui/react";
import { notAuth } from "../../hoc/notAuth";

const SignUp = (props) => {
  const handleSignUp = async (values, { setErrors }) => {
    try {
      await signUp(values)
        .then((response) => {
          if (response.status === 201) {
            props.history.push(path.DASHBOARD);
          } else {
            swal({
              icon: "error",
              title: "Ooops something wrong!",
              text: "Please try again",
            });
          }
        })
        .catch((error) => {
          const errors = {};
          const errorData = error.response.data;
          for (const key in errorData) {
            if (errorData.hasOwnProperty(key)) {
              const element = errorData[key];
              errors[key] = element.toString();
            }
          }
          setErrors(errors);
        });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Flex bg="gray.100" align="center" justify="center" h="100vh">
      <SignUpForm register={handleSignUp} />
    </Flex>
  );
};

export default notAuth(SignUp);
