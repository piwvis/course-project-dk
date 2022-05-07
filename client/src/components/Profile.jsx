import React from "react";
import {connect} from "react-redux";
import {Box} from "@mui/material";

// display buttons or icon depends on auth status
function Profile() {
    return (<Box>
            <div>
                User Profile
            </div>
        </Box>
    );
}
const mapStateToProps = (state) => {
    return {isAuth: state.auth.isAuth}
}

export default connect(mapStateToProps, {})(Profile)
