import React from "react";
import {connect} from "react-redux";
import {Button, Container, Grid, Stack, Typography} from "@mui/material";
import BasicCard from "./BasicCard";
import {StyledButton} from "./styled/StyledButton";
import {Link} from "react-router-dom";
import CollectionUserGrid from "./CollectionUserGrid";

// display buttons or icon depends on auth status
function Profile(props) {
    return (<Container>
            <Stack spacing={2}>
                <Typography variant={"h6"}>User Profile</Typography>
               <span>Username: {props.userName}</span>
                <span>Email: {props.email}</span>
                <span>Collections:</span>
            </Stack>
            <StyledButton><Link style={{textDecoration: 'none', color:'black'}} to="/createCollection">Create Collection</Link></StyledButton>
            <CollectionUserGrid/>
        </Container>
    );
}
const mapStateToProps = (state) => {
    return {userName: state.auth.userName, email: state.auth.email}
}

export default connect(mapStateToProps, {})(Profile)
