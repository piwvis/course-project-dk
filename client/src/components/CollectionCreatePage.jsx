import React from "react";
import {connect} from "react-redux";
import {Button, Container, Stack} from "@mui/material";
import CollectionCreateForm from "./CollectionCreateForm";

// display buttons or icon depends on auth status
function CollectionCreatePage() {
    return (<Container>
            <Stack spacing={2}>
                <CollectionCreateForm/>
            </Stack>
        </Container>
    );
}
const mapStateToProps = (state) => {
    return {isAuth: state.auth.isAuth}
}

export default connect(mapStateToProps, {})(CollectionCreatePage)
