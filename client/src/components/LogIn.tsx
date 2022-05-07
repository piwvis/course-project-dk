import {FieldAttributes, Form, Formik, useField} from "formik";
import {Button, TextField} from "@mui/material";
// @ts-ignore
import React from "react";
import * as yup from "yup";
import {connect} from "react-redux";
import {logInUser} from "../redux/auth-reducer";

function LogIn(props)  {
    const validationSchema = yup.object({username: yup.string().required(), password: yup.string().required()});

    const MyTextField: React.FC<FieldAttributes<{}>> = ({placeholder, ...props}) => {
        // @ts-ignore
        const [field, meta] = useField<{}>(props);
        const errorText = meta.error && meta.touched ? meta.error : "";
        return (<TextField placeholder={placeholder}{...field} helperText={errorText} error={!!errorText}/>);};

    return  <Formik validationSchema={validationSchema} validateOnChange={true} initialValues={{username: "", email: "", password: ""}} onSubmit={(data) => props.logInUser(data)}>
        {({handleSubmit, values, handleChange}) => (
            <Form onSubmit={handleSubmit}>
                <div><MyTextField placeholder={"Enter UserName"} name={"username"} type={"input"} as={TextField}/></div>
                <div><MyTextField placeholder={"Enter Password"} name={"password"} type={"input"} as={TextField}/></div>
                <div><Button type={"submit"}>Submit</Button></div>
            </Form>
        )}
    </Formik>
}

const mapStateToProps = (state) => {return {}}

export default connect(mapStateToProps, {logInUser})(LogIn)
