import React from "react";
import { Formik, Form, Field } from "formik";
import DatePicker from "react-datepicker";

import Select from "react-select";
import { TaskSchema } from "../CreateTaskForm/validation";
import "../CreateTaskForm/style.scss";
import "react-datepicker/dist/react-datepicker.css";
import {
  FormControl,
  Input,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

const EditTaskForm = (props) => (
  <Formik
    initialValues={{
      title: props.name,
      description: props.description,
      statusSelect: props.status,
      dueDate: props.due_date ? new Date(props.due_date) : new Date(),
      estimatedTime: props.estimated_time,
      assignedTo: props.assigned_to
        ? { label: props.assigned_to.email, value: props.assigned_to.id }
        : null,
    }}
    validationSchema={TaskSchema}
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
            placeholder="Title"
            autoFocus
            size="sm"
          />
          <FormErrorMessage>
            {errors.title && touched.title && errors.title}
          </FormErrorMessage>
          <FormLabel htmlFor="description">Description</FormLabel>
          <Field
            name="description"
            type="text"
            as={Input}
            placeholder="Description"
            size="sm"
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
          <div className="position-relative form-group">
            <FormLabel htmlFor="dueDate">Due date</FormLabel>
            <div>
              <DatePicker
                selected={values.dueDate}
                onChange={(date) => setFieldValue("dueDate", date)}
                className={`date-picker ${
                  errors.dueDate && touched.dueDate
                    ? "data-picker-is-invalid"
                    : ""
                }`}
              />
              <FormErrorMessage>
                {errors.dueDate && touched.dueDate && errors.dueDate}
              </FormErrorMessage>
            </div>
          </div>
          <FormLabel htmlFor="estimatedTime">Estimate Time</FormLabel>
          <Field
            name="estimatedTime"
            type="number"
            as={Input}
            placeholder="Estimated Time"
            size="sm"
          />
          <FormErrorMessage>
            {errors.estimatedTime &&
              touched.estimatedTime &&
              errors.estimatedTime}
          </FormErrorMessage>
          <FormControl>
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
          </FormControl>
          <br />
          <Button colorScheme="blue" type="submit" mt={4}>
            Save
          </Button>
        </FormControl>
      </Form>
    )}
  </Formik>
);

export default EditTaskForm;
