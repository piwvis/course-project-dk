import {styled, TextField} from "@mui/material";

export const StyledTextFieldDescription = styled(TextField)(({theme}) => ({
    margin: "5px",
    width: "30%",
    color: "white",
    multiline: "true",
    [theme.breakpoints.down("sm")]: {
        width: "110%",
        fontSize: "5px",
        height: 35,
        margin: "25px",
        padding: "10px 15px 50px 0px"
    }
}))
