import React from "react";

import { Formik, Form, Field } from "formik";
import DatePicker from "react-datepicker";

import Select from "react-select";

import { TaskSchema } from "./validation";

import "react-datepicker/dist/react-datepicker.css";

import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";

const CreateTaskForm = (props) => (
  <Formik
    initialValues={{
      title: "",
      description: "",
      estimatedTime: 0,
      statusSelect: "2",
      dueDate: new Date(),
      assignedTo: "",
      user: [],
    }}
    // validationSchema={TaskSchema}
    onSubmit={props.submitForm}
  >
    {({ values, setFieldValue, touched, errors }) => (
      <Form>
        <FormControl as="div" className="card">
          <FormLabel htmlFor="title">Title</FormLabel>
          <Field
            name="title"
            type="text"
            as={Input}
            className={`form-control ${
              errors.title && touched.title ? "is-invalid" : ""
            }`}
          />
          <FormErrorMessage>
            {errors.title && touched.title && errors.title}
          </FormErrorMessage>

          <FormLabel htmlFor="description">Description</FormLabel>
          <Field
            name="description"
            type="text"
            as={Input}
            className={`form-control ${
              errors.description && touched.description ? "is-invalid" : ""
            }`}
          />
          <FormErrorMessage>
            {errors.description && touched.description && errors.description}
          </FormErrorMessage>

          <FormLabel htmlFor="statusSelect">Status</FormLabel>
          <Field
            name="statusSelect"
            as="select"
            className={`form-control ${
              errors.statusSelect && touched.statusSelect ? "is-invalid" : ""
            }`}
            onChange={(e) => setFieldValue("statusSelect", e.target.value)}
            value={values.statusSelect}
          >
            <option value="0">ToDo</option>
            <option value="1">InProgress</option>
            <option value="2">Done</option>
          </Field>
          <FormErrorMessage>
            {errors.statusSelect && touched.statusSelect && errors.statusSelect}
          </FormErrorMessage>

          <FormLabel htmlFor="dueDate">Due date</FormLabel>
          <DatePicker
            selected={values.dueDate}
            onChange={(date) => setFieldValue("dueDate", date)}
            className={`date-picker ${
              errors.dueDate && touched.dueDate ? "data-picker-is-invalid" : ""
            }`}
          />
          <FormErrorMessage>
            {errors.dueDate && touched.dueDate && errors.dueDate}
          </FormErrorMessage>

          <FormLabel htmlFor="estimatedTime">Estimate Time</FormLabel>
          <Field
            name="estimatedTime"
            type="number"
            as={Input}
            className={`form-control ${
              errors.estimatedTime && touched.estimatedTime ? "is-invalid" : ""
            }`}
          />
          <FormErrorMessage>
            {errors.estimatedTime &&
              touched.estimatedTime &&
              errors.estimatedTime}
          </FormErrorMessage>

          <FormLabel htmlFor="assignedTo">Assigned to</FormLabel>
          <Field
            name="assignedTo"
            as={Select}
            className={`form-control ${
              errors.assignedTo && touched.assignedTo ? "is-invalid" : ""
            }`}
            onChange={(e) => setFieldValue("assignedTo", e)}
            value={values.assignedTo}
            options={props.user.map((user) => ({
              label: user.email,
              value: user.id,
            }))}
          />
          <FormErrorMessage>
            {errors.assignedTo && touched.assignedTo && errors.assignedTo}
          </FormErrorMessage>

          <Button colorScheme="teal" type="submit" mt={4}>
            Save
          </Button>
        </FormControl>
      </Form>
    )}
  </Formik>
);

export default CreateTaskForm;
