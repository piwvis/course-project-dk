import React, {useState} from "react";
import {AppBar, Button, Toolbar, InputBase, styled, Typography, Avatar, Box, MenuItem, Menu} from "@mui/material";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
})

const StyledButton = styled(Button)(({theme}) => ({
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 40,
    padding: "1px 30px",
    margin: "5px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    [theme.breakpoints.down("sm")]: {
        fontSize: "10px",
        height: 30,
        margin: "8px",
        padding: "1px 10px"
    }
}))

const Search = styled("div")(({theme}) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%"
}))

const Interface = styled(Box)(({theme}) => ({
    display: "flex",
    padding: "0 10px"
}))

// display buttons or icon depends on auth status
function NavBar(props) {
    const [open, setOpen] = useState(false)
    return (<AppBar>
            <StyledToolbar>
                <Typography variant={"h6"} sx={{display: {xs: "none", sm: "block"}}}>Hi!</Typography>
                <Search><InputBase placeholder={"search..."}/></Search>
                <Interface>
                    {props.isAuth ? <><Avatar onClick={(e)=>setOpen(true)}/>
                        <UserMenu open={open} setOpen={setOpen}/>  </>: <>
                        <StyledButton><Link style={{textDecoration: 'none', color: 'black'}} to="/login">Log In</Link></StyledButton>
                        <StyledButton><Link style={{textDecoration: 'none', color: 'black'}} to="/signup">Sign Up</Link></StyledButton>
                    </>}
                </Interface>
            </StyledToolbar>
        </AppBar>
    );
}

const UserMenu = (props) => {
    return (<Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={props.open}
        onClose={(e) =>props.setOpen(false)}
        anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
    >
        <MenuItem ><Link style={{textDecoration: 'none', color:'black'}} to="/profile">Profile</Link></MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
    </Menu>)
}
const mapStateToProps = (state) => {
    return {isAuth: state.auth.isAuth}
}

export default connect(mapStateToProps, {})(NavBar)
