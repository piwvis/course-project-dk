import {
    Paper, styled, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow
} from "@mui/material";
import Checkbox from '@mui/material/Checkbox';
// @ts-ignore
import React, {useEffect, useRef, useState} from "react";
import {connect} from "react-redux";
import {checkAllUsers, selectUser, getUsers, unCheckAllUsers, unCheckUser} from "../../redux/users-reducer";
// @ts-ignore
const CollectionTable = React.memo((props) => {
    useEffect(() => {
        props.getUsers();
    }, [props.selectedUsers]);

    const handleClick = e => {
        const { id, checked } = e.target;
        if (checked) {props.checkUser(id);}
        else {props.unCheckUser(id)}
    };

    const handleAllClick = e => {
        const {checked } = e.target;
        if (checked) {props.checkAllUsers();}
        else {props.unCheckAllUsers()}
    };

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));


    return (<div>
        <TableContainer component={Paper}>
            <Table  aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <td>
                            <Checkbox onChange={handleAllClick}/>
                        </td>
                        <StyledTableCell>User Id</StyledTableCell>
                        <StyledTableCell align="right">User Name</StyledTableCell>
                        <StyledTableCell align="right">Email</StyledTableCell>
                        <StyledTableCell align="right">Password</StyledTableCell>
                        <StyledTableCell align="right">Last Updated Time</StyledTableCell>
                        <StyledTableCell align="right">Register Time</StyledTableCell>
                        <StyledTableCell align="right">Status</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.users.map((user) => (
                        <StyledTableRow key={user.id}>
                            <td>
                                <Checkbox value={user.id} id={user.id} checked={props.selectedUsers.includes(user.id)} onChange={handleClick}/>
                            </td>
                            <StyledTableCell component="th" scope="row">{user.id}</StyledTableCell>
                            <StyledTableCell align="right">{user.userName}</StyledTableCell>
                            <StyledTableCell align="right">{user.email}</StyledTableCell>
                            <StyledTableCell align="right">{user.password}</StyledTableCell>
                            <StyledTableCell align="right">{user.updatedAt}</StyledTableCell>
                            <StyledTableCell align="right">{user.createdAt}</StyledTableCell>
                            <StyledTableCell align="right">{user.status}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </div>)
})
const mapStateToProps = (state) => {return {users: state.users.users, selectedUsers: state.users.selectedUsers}}

export default connect(mapStateToProps, {getUsers, checkUser: selectUser, unCheckUser, checkAllUsers, unCheckAllUsers})(React.memo(CollectionTable))
