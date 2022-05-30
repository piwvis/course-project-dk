import {Button} from "@mui/material";
// @ts-ignore
import React from "react";
import {connect} from "react-redux";
import deleteIcon from "../../icons/icons8-delete-32.png"
import unlockIcon from "../../icons/icons8-unlock-32.png"
import UserTable from "./UserTable";
import {changeAuth, logInUser, signUpUser} from "../../redux/auth-reducer";
import {blockUser, deleteUser, unBlockUser} from "../../redux/users-reducer";
// @ts-ignore
function AdminPanel(props) {

    let deleteUserHandler = () => {
        props.deleteUser(props.selectedUsers, props.userId);
    }

    let blockUserHandler = () => {
        props.blockUser(props.selectedUsers, props.userId);
    }

    let unBlockUserHandler = () => {
        props.unBlockUser(props.selectedUsers);
    }

    return (<div>
        <Button color="error" onClick={blockUserHandler}>BLOCK</Button>
        <img alt={"Delete Icon"} src={deleteIcon} onClick={deleteUserHandler}/>
        <img alt={"Unlock Icon"} src={unlockIcon} onClick={unBlockUserHandler}/>
        <UserTable/>
    </div>)
}

const mapStateToProps = (state) => {return {isAuth: state.auth.isAuth, selectedUsers: state.users.selectedUsers, userId: state.auth.userId}}

export default connect(mapStateToProps, {signUpUser, logInUser, deleteUser, blockUser, unBlockUser, changeAuth})(AdminPanel)
