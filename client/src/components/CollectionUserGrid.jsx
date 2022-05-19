import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {Grid} from "@mui/material";
import CollectionViewCard from "./CollectionViewCard";

function CollectionUserGrid(props) {
    const [collections, setCollections] = useState(props.collections)
    useEffect(() => {
        setCollections(props.collections)
    }, [props.collections]);
    return ( <>
        <Grid container>
            {collections.map( (c, index) => <CollectionViewCard  isViewCreate={false} key={index} imageId={c.image} data={c} /> )}
        </Grid>
    </>
    );
}
const mapStateToProps = (state) => {
    return {userId: state.auth.userId}
}

export default connect(mapStateToProps, {})(CollectionUserGrid)
