import {styled, TextField} from "@mui/material";

export const StyledTextField = styled(TextField)(({theme}) => ({
    margin: "5px",
    color: "white",
    [theme.breakpoints.down("sm")]: {
        fontSize: "5px",
        height: 35,
        width: "110%",
        margin: "25px",
        padding: "10px 0px"
    }
}))
