import React from "react";
import {connect} from "react-redux";
import {Button, Container, Grid, Stack} from "@mui/material";
import BasicCard from "./BasicCard";
import {StyledButton} from "./styled/StyledButton";
import {Link} from "react-router-dom";

// display buttons or icon depends on auth status
function Profile() {
    return (<Container>
            <Stack spacing={2}>
                User Profile
               <span>Username: "" Email: ""</span>
                <span>Collections:</span>
            </Stack>
            <StyledButton><Link style={{textDecoration: 'none', color:'black'}} to="/createCollection">Create Collection</Link></StyledButton>
            <Grid container >
               <BasicCard></BasicCard>
            </Grid>
        </Container>
    );
}
const mapStateToProps = (state) => {
    return {isAuth: state.auth.isAuth}
}

export default connect(mapStateToProps, {})(Profile)
