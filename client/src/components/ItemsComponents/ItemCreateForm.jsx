import {Field, Form, Formik, useField, setFieldValue} from "formik";
import {StyledTextField} from "../styled/StyledTextField"
import {StyledButton} from "../styled/StyledButton"
import React, {useState} from "react";
import * as yup from "yup";
import {connect} from "react-redux";
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

    let collectionData = {description: "", name: "", topic: ""};


    let sendData = (data) => {data.userId = props.userId;
        data.itemsCount= 0; props.addCollection(data);}

    const MyTextFieldTags = ({value, placeholder, ...props}) => {
        const [field, meta] = useField(props);
        const errorText = meta.error && meta.touched ? meta.error : "";
        return (
            <Autocomplete
                name={"tags"}
                multiple
                id="tags-outlined"
                options={top100Films}
                getOptionLabel={(option) => option.title}
                defaultValue={[top100Films[2]]}
                filterSelectedOptions
                renderInput={(params) => (
                    <StyledTextField
                        {...field}
                        {...params}
                        label="Tags"
                        placeholder="Add tag"
                    />
                )}
            />);
    };

    const MyTextField = ({value, placeholder, ...props}) => {
        const [field, meta] = useField(props);
        collectionData.name = field.value
        const errorText = meta.error && meta.touched ? meta.error : "";
        return (<StyledTextField placeholder={placeholder}{...field} helperText={errorText} error={!!errorText}/>);
    };

    const top100Films = [
        { title: 'The Shawshank Redemption', year: 1994 },
        { title: 'The Godfather', year: 1972 },
        { title: 'The Godfather: Part II', year: 1974 },
        { title: 'The Dark Knight', year: 2008 },
        { title: '12 Angry Men', year: 1957 },
        { title: "Schindler's List", year: 1993 },
        { title: 'Pulp Fiction', year: 1994 },
        {
            title: 'The Lord of the Rings: The Return of the King',
            year: 2003,
        },
        { title: 'The Good, the Bad and the Ugly', year: 1966 },
        { title: 'Fight Club', year: 1999 },
        {
            title: 'The Lord of the Rings: The Fellowship of the Ring',
            year: 2001,
        },
        { title: 'Snatch', year: 2000 },
        { title: '3 Idiots', year: 2009 },
        { title: 'Monty Python and the Holy Grail', year: 1975 },
    ];


    return <> <Typography variant={"body2"}>New Item</Typography> <Formik validationSchema={validationSchema} validateOnChange={true} initialValues={{
        itemName: "",
        tags: {}
    }} onSubmit={(data) => {console.log(data)}}>
        {({handleSubmit, values, handleChange}) => (
            <Form onChange={handleChange} onSubmit={handleSubmit}>
                <div><MyTextField placeholder={"Enter Collection Name: "} onChange={handleChange} name={"itemName"} type={"input"}/></div>
                <Autocomplete
                    sx={{width: 300}}
                    name={"tags"}
                    multiple
                    id="tags-outlined"
                    options={top100Films}
                    getOptionLabel={(option) => option.title}
                    defaultValue={[top100Films[2]]}
                    onChange={()=> {console.log()}}
                    filterSelectedOptions
                    renderInput={(params) => (
                        <StyledTextField
                            {...params}
                            label="Tags"
                            placeholder="Add tag"
                        />
                    )}
                />
                <ItemViewCard isViewCreate={true} data={collectionData}/>
                <div><StyledButton type={"submit"}>Create</StyledButton></div>
            </Form>
        )}
    </Formik>
    </>
}

const mapStateToProps = (state) => {
    return {userId: state.auth.userId}
}

export default connect(mapStateToProps, {addCollection})(ItemCreateForm)
