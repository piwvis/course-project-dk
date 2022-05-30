import React, {useEffect, useState} from "react";
import {Grid} from "@mui/material";
import CollectionViewCard from "./CollectionViewCard";

function UserCollectionsList(props) {
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

export default UserCollectionsList
