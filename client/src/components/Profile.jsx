import React from "react";
import {connect} from "react-redux";
import {Container, Stack, Typography} from "@mui/material";
import {StyledButton} from "./styled/StyledButton";
import {Link} from "react-router-dom";
import CollectionUserGrid from "./CollectionsComponents/CollectionUserGrid";
import {useEffect} from "react";
import {getCollections} from "../redux/collections-reducer";

function Profile(props) {
    useEffect(() => {
        props.getCollections(props.userId)
    }, [props.isFetching]);
    return (<Container>
            <Stack spacing={2}>
                <Typography variant={"h6"}>User Profile</Typography>
                <span>Username: {props.userName}</span>
                <span>Email: {props.email}</span>
                <span>Collections:</span>
            </Stack>
            <StyledButton><Link style={{textDecoration: 'none', color:'black'}} to="/createCollection">Create Collection</Link></StyledButton>
            { props.isFetching ? <span>Loading...</span> : <CollectionUserGrid collections={props.collections}/>}
        </Container>
    );
}
const mapStateToProps = (state) => {
    return { isFetching: state.collectionsUser.isFetching, userName: state.auth.userName, email: state.auth.email, collections: state.collectionsUser.collections, userId: state.auth.userId}
}

export default connect(mapStateToProps, {getCollections})(Profile)
