import React, {useEffect, useState} from "react";
import axios from 'axios';
import {Form, Field, withFormik} from "formik";
import * as Yup from 'yup';
import { axiosWithAuth } from "../Utils/axiosWithAuth.js"
import FriendsList from "./friendslist"

const AddFriendForm = ({errors, touched, status}) => {
    const [friend, setFriend] = useState([]);
    const [newFriend, setNewFriend] = useState({})
    console.log(newFriend)

    useEffect(() => {
        setNewFriend(status)
    }, [setNewFriend, status])

    return (
        <div>
        <Form>
        <h2>Add A Friend</h2>
        <Field type = "text" name = "name" placeholder ="Username" />
        {touched.name && errors.name && <p>{errors.name}</p>}
        <Field type = "text" name = "age" placeholder = "Age" />
        {touched.age && errors.age && <p>{errors.age}</p>}
        <Field type = "email" name = "email" placeholder = "Email" />
        {touched.email && errors.email && <p>{errors.email}</p>}
        <button type="submit">Add Friend</button>
        <FriendsList friend = {friend} setFriend = {setFriend} newFriend = {newFriend} />
        </Form>
        </div>
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
        name: Yup.string().required("Name is Required"),
        age: Yup.string().required("Age is Required"),
        email: Yup.string().required("Email is Required"),
    }),

    handleSubmit(values, {setStatus, resetForm}) {
        axiosWithAuth()
            .post("http://localhost:5000/api/friends", values)
            .then(res => {
                console.log(res.data)
                setStatus(res.data)
            })
            .catch(error => console.log(error))
        resetForm();
    } 
})(AddFriendForm);

export default FormikAddFriendForm;
