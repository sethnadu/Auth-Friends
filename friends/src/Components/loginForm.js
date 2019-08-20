import React, {useState, useEffect} from "react";
import {withRouter} from "react-router-dom"
import axios from 'axios';
import {Form, Field, withFormik} from "formik";
import * as Yup from 'yup';


const LoginForm = ({errors, touched}) => {
  

    return (
        <>
        <Form>
        <h2>Login</h2>
        <Field type = "text" name = "username" placeholder ="Username" />
        {touched.username && errors.username && <p>{errors.username}</p>}
        <Field type = "password" name = "password" placeholder = "Password" />
        {touched.password && errors.password && <p>{errors.password}</p>}
        <button type="submit">Submit</button>
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
        username: Yup.string().required("Username is Required"),
        password: Yup.string().required("Password is Required"),
    }),

    handleSubmit(values,{setStatus, props}) {
        const {history} = props;
        axios
            .post("http://localhost:5000/api/login", values)
            .then(res => {
                localStorage.setItem("token", res.data.payload)
                setStatus(res.data)
                console.log(res.data)
                history.push("/protected")
                
            }, {...props})
            .catch(error => console.log(error))
        
    }
})(LoginForm);

const RouterFormik = withRouter(FormikLoginForm)

export default RouterFormik;
