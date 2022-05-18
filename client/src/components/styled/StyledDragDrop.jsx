import {Container, styled} from "@mui/material";

export const StyledDragDrop = styled(Container)(({theme}) => ({
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    borderRadius: 3,
    width: "30%",
    border: 0,
    color: "white",
    height: 70,
    padding: "25px 30px",
    margin: "5px",
    [theme.breakpoints.down("sm")]: {
        fontSize: "10px",
        width: "60%",
        height: 30,
        margin: "15px 5px",
        padding: "7px 10px"
    }
}))
