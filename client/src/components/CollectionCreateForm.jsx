import {Form, Formik, useField} from "formik";
import {StyledTextField} from "./styled/StyledTextField"
import {StyledButton} from "./styled/StyledButton"
import React, {useState} from "react";
import * as yup from "yup";
import {connect} from "react-redux";
import CollectionCreateView from "./CollectionCreateView";
import {StyledTextFieldDescription} from "./styled/StyledTextFieldDescription";
import DragDrop from "./DragDropImage/DragDrop";

function CollectionCreateForm()  {
    const validationSchema = yup.object({collectionName: yup.string().required(), description: yup.string().required()});

   let [imageId, setImage] = useState();

    let collectionData = {
        description: "",
        name: ""
    };

    let assignImageId = (imageId) => {
        setImage(imageId);
    }

    const MyTextFieldDescription = ({ value, placeholder, ...props}) => {
        const [field, meta] = useField(props);
        collectionData.description = field.value
        const errorText = meta.error && meta.touched ? meta.error : "";
        return (<StyledTextFieldDescription multiline rows={3} placeholder={placeholder}{...field} helperText={errorText} error={!!errorText}/>);};

    const MyTextField = ({ value, placeholder, ...props}) => {
        const [field, meta] = useField(props);
        collectionData.name = field.value
        const errorText = meta.error && meta.touched ? meta.error : "";
        return (<StyledTextField placeholder={placeholder}{...field} helperText={errorText} error={!!errorText}/>);};

    return <> <Formik validationSchema={validationSchema} handleChange={(data) => console.log(data)} validateOnChange={true} initialValues={{collectionName: "", description: "", image: ""}} onSubmit={(data) => console.log(data)}>
        {({handleSubmit, values, handleChange}) => (
            <Form onChange={handleChange} onSubmit={handleSubmit}>
                <div><MyTextField placeholder={"Enter Collection Name: "} onChange={handleChange} name={"collectionName"} type={"input"}/></div>
                <div><MyTextFieldDescription  placeholder={"Enter Description: "} name={"description"} type={"input"} /> </div>
                <div><DragDrop assignImageId={assignImageId}/></div>
                <CollectionCreateView imageId={imageId} data={collectionData} />
                <div><StyledButton type={"submit"}>Create</StyledButton></div>
            </Form>
        )}
    </Formik>
    </>
}

const mapStateToProps = (state) => {return {}}

export default connect(mapStateToProps, {})(CollectionCreateForm)
