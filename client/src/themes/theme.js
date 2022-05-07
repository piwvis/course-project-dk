import {createTheme} from "@mui/material";
import {blue} from "@mui/material/colors";

export const theme = createTheme({
    palette:{
        primary: {
            main: '#122',
        },
        secondary: {
            main: "#190"
        }
    },
    fontSize: '1.2rem',
    '@media (min-width:600px)': {
        fontSize: '1.5rem',
    },
})
