import React from "react";
import axios from 'axios';
import {Form, Field, withFormik} from "formik";
import * as Yup from 'yup';

const addFriendForm = ({errors, touched}) => {

    return (
        <>
        <Form>
        <h2>Add A Friend</h2>
        <Field type = "text" name = "name" placeholder ="Username" />
        {touched.name && errors.name && <p>{errors.name}</p>}
        <Field type = "text" name = "age" placeholder = "Password" />
        {touched.age && errors.age && <p>{errors.age}</p>}
        <Field type = "email" name = "email" placeholder = "Password" />
        {touched.email && errors.email && <p>{errors.email}</p>}
        </Form>
        </>
    )
}

const FormikAddFriendForm = withFormik({
    mapPropsToValues({name, age, email}){
        return {
            name: name || "",
            age: age || "",
            email: email || "",
        }
    },

    validationSchema: Yup.object().shape({
        name: Yup.string.required("Name is Required"),
        age: Yup.string.required("Age is Required"),
        email: Yup.string.required("Email is Required"),
    }),

    handleSubmit(values) {
        axios
            .post("", values)
            .then()
            .catch()
        
    }
})(addFriendForm);

export default FormikAddFriendForm;
