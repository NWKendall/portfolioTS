import { makeStyles, createStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => 
    createStyles({
        navbarContainer: {
            backgroundColor: "#192231"
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


// cloud = #98878F
// sunset = #985E6D
// evening = #192231
// stormy = #494E6B