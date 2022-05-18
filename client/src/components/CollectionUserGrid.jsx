import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {Button, Grid, InputLabel, MenuItem} from "@mui/material";
import BasicCard from "./BasicCard";
import {Field} from "formik";
import {getCollections} from "../redux/collections-reducer";
import CollectionViewCard from "./CollectionViewCard";

function CollectionUserGrid(props) {

    const [collections, setCollections] = useState(props.collections);

    useEffect(() => {
        props.getCollections(props.userId);
        setCollections(props.collections);
        console.log(collections)
    }, []);

    return ( <>
        <Grid container>
            {collections.map( (c, index) => <CollectionViewCard  isViewCreate={false} key={index} imageId={c.image} data={c} /> )}
        </Grid>
    </>
    );
}
const mapStateToProps = (state) => {
    return {collections: state.collectionsUser.collections, userId: state.auth.userId}
}

export default connect(mapStateToProps, {getCollections})(CollectionUserGrid)
