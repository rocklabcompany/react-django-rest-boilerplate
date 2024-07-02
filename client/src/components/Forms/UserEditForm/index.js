import React from "react";
import { Formik, Form, Field } from "formik";

import { UserFormValidate } from "./validation";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  VStack,
} from "@chakra-ui/react";

const UserEditForm = (props) => {
  return (
    <Box className="col-lg-7 col-xlg-9 col-md-7">
      <Formik
        initialValues={props.initialValues}
        validationSchema={UserFormValidate}
        onSubmit={props.handleEditUser}
        enableReinitialize={true}
      >
        {({ values, setFieldValue, errors, touched }) => (
          <Box className="card" p={4}>
            <Form>
              <VStack spacing={4}>
                <FormControl isInvalid={errors.username && touched.username}>
                  <FormLabel htmlFor="username">Full name</FormLabel>
                  <Field
                    as={Input}
                    id="username"
                    name="username"
                    type="text"
                    value={values?.username}
                    onChange={(event) =>
                      setFieldValue("username", event.target.value)
                    }
                  />
                  <FormErrorMessage>{errors.username}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={errors.email && touched.email}>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Field
                    as={Input}
                    id="email"
                    name="email"
                    type="text"
                    value={values?.email}
                    onChange={(event) =>
                      setFieldValue("email", event.target.value)
                    }
                  />
                  <FormErrorMessage>{errors.email}</FormErrorMessage>
                </FormControl>

                <FormControl>
                  <FormLabel htmlFor="avatar">Avatar</FormLabel>
                  <Input
                    id="avatar"
                    name="avatar"
                    type="file"
                    accept="image/*"
                    onChange={props.handleImageChange}
                  />
                  {props.error && (
                    <FormErrorMessage>{props.error}</FormErrorMessage>
                  )}
                </FormControl>

                <Button colorScheme="teal" type="submit">
                  Save
                </Button>
              </VStack>
            </Form>
          </Box>
        )}
      </Formik>
    </Box>
  );
};
export default UserEditForm;
