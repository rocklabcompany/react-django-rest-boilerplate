import React from "react";
import { Formik, Form, Field } from "formik";

import { ConfirmEmailSchema } from "./validation";
import {MDBInput} from "mdb-react-ui-kit";
import {Button} from "reactstrap";

export const ConfirmEmailForm = ({ confirmEmail }) => (
  <Formik
    initialValues={{ email: "" }}
    validationSchema={ConfirmEmailSchema}
    onSubmit={confirmEmail}
  >
    {() => (
      <div className="card">
        <div className="card-header">Reset password</div>
        <div className="card-body">
          <Form>
            <Field
              name="email"
              type="email"
              component={MDBInput}
              label="email"
            />
            <Button type="submit">Submit</Button>
          </Form>
        </div>
      </div>
    )}
  </Formik>
);
