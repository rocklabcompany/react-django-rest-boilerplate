import React from "react";
import { Formik, Form, Field } from "formik";

import { SignupSchema } from "./validation";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";

export const SignUpForm = (props) => (
  <Formik
    initialValues={{
      username: "",
      email: "",
      password1: "",
      password2: "",
    }}
    validationSchema={SignupSchema}
    onSubmit={props.register}
  >
    {() => (
      <Card className="card">
        <CardHeader className="card-header">
          <Heading> Signup</Heading>
        </CardHeader>
        <CardBody>
          <Form>
            <FormControl style={{ marginTop: "15px" }}>
              <FormLabel htmlFor={"username"}>Username:</FormLabel>
              <Field
                name="username"
                type="text"
                component={Input}
                label="Name"
                placeholder={"username"}
                variant="filled"
              />
            </FormControl>
            <FormControl style={{ marginTop: "15px" }}>
              <FormLabel htmlFor={"password"}>Password:</FormLabel>
              <Field
                name="email"
                type="email"
                component={Input}
                label="Email"
                placeholder={"email"}
                variant="filled"
              />
            </FormControl>
            <FormControl style={{ marginTop: "15px" }}>
              <FormLabel htmlFor={"password"}>Password:</FormLabel>
              <Field
                name="password1"
                type="password"
                component={Input}
                placeholder={"password"}
                variant="filled"
              />
            </FormControl>
            <FormControl style={{ marginTop: "15px" }}>
              <FormLabel htmlFor={"password2"}>
                Password confirmation:
              </FormLabel>
              <Field
                name="password2"
                type="password"
                component={Input}
                placeholder={"password"}
                variant="filled"
              />
            </FormControl>
            <Button
              style={{ marginTop: "25px" }}
              type="submit"
              colorScheme="purple"
              width="full"
            >
              Login
            </Button>
          </Form>
        </CardBody>
      </Card>
    )}
  </Formik>
);
