import React from "react";
import axios from 'axios';
import {Form, Field, withFormik} from "formik";
import * as Yup from 'yup';

const loginForm = ({errors, touched}) => {

    return (
        <>
        <Form>
        <h2>Login</h2>
        <Field type = "text" name = "username" placeholder ="Username" />
        {touched.username && errors.username && <p>{errors.username}</p>}
        <Field type = "password" name = "password" placeholder = "Password" />
        {touched.password && errors.password && <p>{errors.password}</p>}
        </Form>
        </>
    )
}

const FormikLoginForm = withFormik({
    mapPropsToValues({username, password}){
        return {
            username: username || "",
            password: password || ""
        }
    },

    validationSchema: Yup.object().shape({
        username: Yup.string.required("Username is Required"),
        password: Yup.string.required("Password is Required"),
    }),

    handleSubmit(values) {
        axios
            .post("", values)
            .then()
            .catch()
        
    }
})(loginForm);

export default FormikLoginForm;
