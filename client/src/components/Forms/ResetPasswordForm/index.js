import React from "react";
import { Formik, Form, Field } from "formik";

import { ResetPasswordSchema } from "./validation";
import { Button, Input } from "@chakra-ui/react";

export const ResetPasswordForm = ({ uid, confirmToken, resetPassword }) => (
  <Formik
    initialValues={{
      newPassword1: "",
      newPassword2: "",
      userId: uid,
      confirmToken: confirmToken,
    }}
    validationSchema={ResetPasswordSchema}
    onSubmit={resetPassword}
  >
    {() => (
      <div className="card">
        <div className="card-header">Reset password</div>
        <div className="card-body">
          <Form>
            <Field
              name="newPassword1"
              type="password"
              component={Input}
              label="password1"
            />
            <Field
              name="newPassword2"
              type="password"
              component={Input}
              label="password2"
            />
            <Button type="submit">Submit</Button>
          </Form>
        </div>
      </div>
    )}
  </Formik>
);
