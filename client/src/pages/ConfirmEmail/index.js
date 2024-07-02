import React from "react";

import * as path from "constants/routes";

import { ConfirmEmailForm } from "components/Forms/ConfirmEmailForm";

import { confirmEmail } from "api/queries/index";
import swal from "sweetalert";
import { Flex } from "@chakra-ui/react";

const ConfirmEmail = ({ history }) => {
  const handleConfirmEmail = async (values, { setErrors }) => {
    try {
      await confirmEmail(values)
        .then((response) => {
          if (response.status === 200) {
            swal({
              icon: "success",
              title: `${response.data.detail}`,
              text: "Good Job",
            }).then(() => {
              history.push(path.HOME);
            });
          } else {
            setErrors(response.data.detail);
          }
        })
        .catch((error) => setErrors(error.response));
    } catch (error) {
      return;
    }
  };

  return (
    <Flex>
      <ConfirmEmailForm confirmEmail={handleConfirmEmail} />
    </Flex>
  );
};

export default ConfirmEmail;
