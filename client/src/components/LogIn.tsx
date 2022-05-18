import {FieldAttributes, Form, Formik, useField} from "formik";
import {Button, TextField} from "@mui/material";
// @ts-ignore
import React from "react";
import * as yup from "yup";
import {connect} from "react-redux";
import {logInUser} from "../redux/auth-reducer";
// @ts-ignore
import {StyledTextField} from "./styled/StyledTextField"
import {StyledButton} from "./styled/StyledButton"
import {Navigate} from "react-router-dom";


function LogIn(props) {
    const validationSchema = yup.object({username: yup.string().required(), password: yup.string().required()});

    const MyTextField: React.FC<FieldAttributes<{}>> = ({placeholder, ...props}) => {
        // @ts-ignore
        const [field, meta] = useField<{}>(props);
        const errorText = meta.error && meta.touched ? meta.error : "";
        return (<StyledTextField placeholder={placeholder}{...field} helperText={errorText} error={!!errorText}/>);
    };

    return <>{props.isAuth ?
        <Navigate to="/home" replace={true}/> :
        <Formik validationSchema={validationSchema} validateOnChange={true}
                initialValues={{username: "", email: "", password: ""}} onSubmit={(data) => props.logInUser(data)}>
            {({handleSubmit, values, handleChange}) => (
                <Form onSubmit={handleSubmit}>
                    <div><MyTextField placeholder={"Enter user name"} name={"username"} type={"input"}/></div>
                    <div><MyTextField placeholder={"Enter password"} name={"password"} type={"input"}/></div>
                    <div><StyledButton type={"submit"}>Submit</StyledButton></div>
                </Form>)}
        </Formik>}
    </>
}

const mapStateToProps = (state) => {
    return {isAuth: state.auth.isAuth}
}

export default connect(mapStateToProps, {logInUser})(LogIn)
