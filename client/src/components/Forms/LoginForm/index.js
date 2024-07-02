import React from "react";

import { Formik, Form, Field } from "formik";
import { LoginSchema } from "./validation";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  Heading,
} from "@chakra-ui/react";
export const LoginForm = ({ login }) => (
  <Formik
    initialValues={{
      username: "",
      password: "",
    }}
    validationSchema={LoginSchema}
    onSubmit={login}
  >
    {({ setFieldValue }) => (
      <Card>
        <CardHeader>
          <Heading size="md">Login</Heading>
        </CardHeader>
        <CardBody>
          <Form>
            <FormControl>
              <FormLabel htmlFor={"email"}>Email Address:</FormLabel>
              <Field
                name="email"
                type="email"
                component={Input}
                onChange={(e) => setFieldValue("username", e.target.value)}
                label="Email"
                placeholder="Email"
                variant="filled"
              />
            </FormControl>
            <FormControl style={{ marginTop: "15px" }}>
              <FormLabel htmlFor={"password"}>Password:</FormLabel>
              <InputGroup>
                <Field
                  placeholder="Password"
                  name="password"
                  type="password"
                  component={Input}
                  onChange={(e) => setFieldValue("password", e.target.value)}
                  label="Password"
                  variant="filled"
                />
              </InputGroup>
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
