import React from "react";

import { Formik, Form, Field } from "formik";
import { Button } from "reactstrap";
import { LoginSchema } from "./validation";
import {MDBInput} from "mdb-react-ui-kit";

export const LoginForm = ({ login }) => (
  <Formik
    initialValues={{
      username: "",
      password: ""
    }}
    validationSchema={LoginSchema}
    onSubmit={login}
  >
    {({setFieldValue}) => (
      <div className="card">
        <div className="card-header">Login</div>
        <div className="card-body">
          <Form>
            <Field
              name="username"
              type="email"
              component={MDBInput}
              onChange={(e) => setFieldValue("username", e.target.value)}
              label="Email"
            />
            <Field
              name="password"
              type="password"
              component={MDBInput}
              onChange={(e) => setFieldValue("password", e.target.value)}
              label="Password"
            />
            <Button type="submit" >Submit</Button>
          </Form>
        </div>
      </div>
    )}
  </Formik>
);
