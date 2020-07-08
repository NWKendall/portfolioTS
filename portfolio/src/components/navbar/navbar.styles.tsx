import { makeStyles, createStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => 
    createStyles({
        navbarContainer: {
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            border: "green 1px solid",
        },
        name: {
            fontSize: "2rem",
        },
        navbar: {
            display: "flex",
            justifyContent: "space-around",
            border: "pink 1px solid",
            margin: 0,
            padding: 0,
        }
    })
)    
