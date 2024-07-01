import React from "react";
import { Formik, Form, Field } from "formik";
import { Button } from "reactstrap";

import { SignupSchema } from "./validation";
import {MDBInput} from "mdb-react-ui-kit";

export const SignUpForm = props => (
  <Formik
    initialValues={{
      username: "",
      email: "",
      password1: "",
      password2: ""
    }}
    validationSchema={SignupSchema}
    onSubmit={props.register}
  >
    {() => (
      <div className="card">
        <div className="card-header">Signup</div>
        <div className="card-body">
          <Form>
            <Field
              name="username"
              type="text"
              component={MDBInput}
              label="Name"
            />
            <Field
              name="email"
              type="email"
              component={MDBInput}
              label="Email"
            />
            <Field
              name="password1"
              type="password"
              component={MDBInput}
              label="Password"
            />
            <Field
              name="password2"
              type="password"
              component={MDBInput}
              label="Password confirmation"
            />
            <Button type="submit">Submit</Button>
          </Form>
        </div>
      </div>
    )}
  </Formik>
);
