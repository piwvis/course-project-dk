import {Field, Form, Formik, useField, setFieldValue} from "formik";
import {StyledTextField} from "../styled/StyledTextField"
import {StyledButton} from "../styled/StyledButton"
import React, {useState} from "react";
import * as yup from "yup";
import {connect, useSelector} from "react-redux";
import {Select, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {addCollection} from "../../redux/collections-reducer";
import ItemViewCard from "./ItemViewCard";
import Autocomplete from "@mui/material/Autocomplete";

function ItemCreateForm(props) {
    const validationSchema = yup.object({
        itemName: yup.string().required(),
    });

    const navigate = useNavigate()

    const itemsTags = useSelector((state) => state.collectionsUser.tags)

    let itemData = {name: "", tags: []};

    let setItemTags = (data) => {
        itemData.tags = [...data]
    }

    let sendItemData = (data) => {
        data.tags= [...itemData.tags];}

    const MyTextField = ({value, placeholder, ...props}) => {
        const [field, meta] = useField(props);
        itemData.name = field.value
        const errorText = meta.error && meta.touched ? meta.error : "";
        return (<StyledTextField placeholder={placeholder}{...field} helperText={errorText} error={!!errorText}/>);
    };

    return <> <Typography variant={"body2"}>New Item</Typography> <Formik validationSchema={validationSchema} validateOnChange={true} initialValues={{
        itemName: "",
        tags: {}
    }} onSubmit={(data) => {sendItemData(data)}}>
        {({handleSubmit, values, handleChange}) => (
            <Form onChange={handleChange} onSubmit={handleSubmit}>
                <div><MyTextField placeholder={"Enter Collection Name: "} onChange={handleChange} name={"itemName"} type={"input"}/></div>
                <Autocomplete
                    sx={{width: 300}} name={"tags"} multiple id="tags-outlined" options={itemsTags} getOptionLabel={(option) => option.name}
                    defaultValue={[itemsTags[2]]}
                    onChange={(event, value)=> {setItemTags(value)}}
                    filterSelectedOptions
                    renderInput={(params) => (
                        <StyledTextField
                            {...params}
                            label="Tags"
                            placeholder="Add tag"
                        />
                    )}
                />
                <ItemViewCard isViewCreate={true} data={itemData}/>
                <div><StyledButton type={"submit"}>Create</StyledButton></div>
            </Form>
        )}
    </Formik>
    </>
}

const mapStateToProps = (state) => {
    return {}
}

export default connect(mapStateToProps, {addCollection})(ItemCreateForm)
