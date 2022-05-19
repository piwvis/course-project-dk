import {Field, FieldArray, Form, Formik, useField} from "formik";
import {StyledTextField} from "./styled/StyledTextField"
import {StyledButton} from "./styled/StyledButton"
import React, {useState} from "react";
import * as yup from "yup";
import {connect} from "react-redux";
import {StyledTextFieldDescription} from "./styled/StyledTextFieldDescription";
import DragDrop from "./DragDropImage/DragDrop";
import {Button, Grid, InputLabel, MenuItem, Select, Typography} from "@mui/material";
import CollectionViewCard from "./CollectionViewCard";
import {useNavigate} from "react-router-dom";
import {addCollection} from "../redux/collections-reducer";

function CollectionCreateForm(props) {
    const validationSchema = yup.object({
        collectionName: yup.string().required(),
        description: yup.string().required(),
        fields: yup.array(yup.object({fieldName: yup.string().required('field name is required')}))
    });

    let [imageId, setImage] = useState("");

    const navigate = useNavigate()

    let collectionData = {
        description: "",
        name: "",
        topic: ""
    };

    let assignImageId = (imageId) => {
        setImage(imageId);
    }

    let sendData = (data) => {
        data.image = imageId;
        data.userId = props.userId;
        data.itemsCount= 0
        props.addCollection(data);
    }

    const MyTextFieldDescription = ({value, placeholder, ...props}) => {
        const [field, meta] = useField(props);
        collectionData.description = field.value
        const errorText = meta.error && meta.touched ? meta.error : "";
        return (
            <StyledTextFieldDescription multiline rows={3} placeholder={placeholder}{...field} helperText={errorText}
                                        error={!!errorText}/>);
    };

    const MyTextField = ({value, placeholder, ...props}) => {
        const [field, meta] = useField(props);
        collectionData.name = field.value
        const errorText = meta.error && meta.touched ? meta.error : "";
        return (<StyledTextField placeholder={placeholder}{...field} helperText={errorText} error={!!errorText}/>);
    };

    const MyTextFieldValid = ({value, placeholder, ...props}) => {
        const [field, meta] = useField(props);
        const errorText = meta.error && meta.touched ? meta.error : "";
        return (<StyledTextField placeholder={placeholder}{...field} helperText={errorText} error={!!errorText}/>);
    };

    const CustomizedSelectForFormik = ({children, form, field}) => {
        const {name, value} = field;
        const {setFieldValue} = form;

        collectionData.topic = value

        return (
            <Select
                name={name}
                value={value}
                onChange={e => {
                    setFieldValue(name, e.target.value);
                }}
            >
                {children}
            </Select>
        );
    };

    const CustomizedSelect = ({children, form, field}) => {
        const {name, value} = field;
        const {setFieldValue} = form;

        return (
            <Select
                name={name}
                value={value}
                onChange={e => {
                    setFieldValue(name, e.target.value);
                }}
            >
                {children}
            </Select>
        );
    };

    return <> <Typography variant={"body2"}>New Collection</Typography> <Formik validationSchema={validationSchema} validateOnChange={true} initialValues={{
        collectionName: "",
        description: "",
        image: "",
        topic: "Books",
        fields: [{fieldName: "Author", type: "string"}]
    }} onSubmit={(data) => {sendData(data); navigate('/profile') } }>
        {({handleSubmit, values, handleChange}) => (
            <Form onChange={handleChange} onSubmit={handleSubmit}>
                <div><MyTextField placeholder={"Enter Collection Name: "} onChange={handleChange}
                                  name={"collectionName"} type={"input"}/></div>
                <div><MyTextFieldDescription placeholder={"Enter Description: "} name={"description"} type={"input"}/>
                </div>
                <div>
                    <InputLabel id="select-label">Topic</InputLabel>
                    <Field name="topic" component={CustomizedSelectForFormik}>
                        <MenuItem value={"Books"}>Books</MenuItem>
                        <MenuItem value={"Flowers"}>Flowers</MenuItem>
                        <MenuItem value={"Alcohol"}>Alcohol</MenuItem>
                    </Field>
                </div>
                <FieldArray name={"fields"}>{({push, remove}) => (
                    <>
                        <Typography variant={"body2"}>Fields</Typography>
                        {values.fields.map((f, index) => (
                            <Grid key={index} container spacing={2} padding={1}>
                                <Grid item>
                                    <MyTextFieldValid name={`fields.${index}.fieldName`} label={"Name"}/>
                                </Grid>
                                <Grid item display={"flex"} alignItems={"center"}>
                                    <Grid item margin={"5px"}>
                                        <InputLabel id="select-value">Field Type</InputLabel>
                                    </Grid>
                                    <Field name={`fields[${index}].type`} defaultValue={"string"}
                                           component={CustomizedSelect}>
                                        <MenuItem value={"string"}>String</MenuItem>
                                        <MenuItem value={"integer"}>Integer</MenuItem>
                                        <MenuItem value={"time"}>Time</MenuItem>
                                        <MenuItem value={"boolean"}>Boolean</MenuItem>
                                    </Field>
                                </Grid>
                                <Grid item>
                                    <Button type={"button"} onClick={() => remove(index)}>Remove</Button>
                                </Grid>
                            </Grid>
                        ))}
                        <Grid item>
                            <Button type={"button"} onClick={() => push({fieldName: "", type: "string"})}>Add
                                Field</Button>
                        </Grid>
                    </>
                )}</FieldArray>
                <div><DragDrop assignImageId={assignImageId}/></div>
                <CollectionViewCard imageId={imageId} isViewCreate={true} data={collectionData}/>
                <div><StyledButton type={"submit"}>Create</StyledButton></div>
            </Form>
        )}
    </Formik>
    </>
}

const mapStateToProps = (state) => {
    return {userId: state.auth.userId}
}

export default connect(mapStateToProps, {addCollection})(CollectionCreateForm)
