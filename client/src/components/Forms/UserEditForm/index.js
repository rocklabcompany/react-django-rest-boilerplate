import React from "react";
import { Formik, Form, Field } from "formik";

import { UserFormValidate } from "./validation";
import {MDBInput} from "mdb-react-ui-kit";
import {Button} from "reactstrap";

const UserEditForm = props => {
  return (
    <div className="col-lg-7 col-xlg-9 col-md-7">
      <Formik
        initialValues={props.initialValues}
        validationSchema={UserFormValidate}
        onSubmit={props.handleEditUser}
        enableReinitialize={true}
      >
        {() => (
          <div className="card">
            <div className="card-body">
              <Form>
                <Field
                  name="username"
                  type="text"
                  component={MDBInput}
                  label="Full name"
                />
                <Field
                  name="email"
                  type="text"
                  component={MDBInput}
                  label="Email"
                />
                <div className="position-relative form-group">
                  <label>Avatar</label>
                  <input
                    name="avatar"
                    type="file"
                    className="form-control-file"
                    accept="image/*"
                    onChange={props.handleImageChange}
                    label="Avatar"
                  />
                  {props.error && (
                    <div className="invalid-feedback d-block">
                      {props.error}
                    </div>
                  )}
                </div>
                <Button color="primary" type="submit" style={{ margin: 0 }}>
                  Save
                </Button>
              </Form>
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default UserEditForm;
