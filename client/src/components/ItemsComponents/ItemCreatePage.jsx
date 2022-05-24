import React from "react";
import {connect} from "react-redux";
import {Container, Stack} from "@mui/material";
import ItemCreateForm from "./ItemCreateForm";

function ItemCreatePage() {
    return (<Container>
            <Stack spacing={2}>
                <ItemCreateForm/>
            </Stack>
        </Container>
    );
}
const mapStateToProps = (state) => {
    return {isAuth: state.auth.isAuth}
}

export default connect(mapStateToProps, {})(ItemCreatePage)
