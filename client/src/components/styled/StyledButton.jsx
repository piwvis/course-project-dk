import {Button, styled} from "@mui/material";

export const StyledButton = styled(Button)(({theme}) => ({
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
