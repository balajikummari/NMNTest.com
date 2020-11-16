
import { makeStyles, Box, Typography, Card } from "@material-ui/core";
import styles from "./style";

const useStyles = makeStyles(styles);

const Footer = (props) => {
    const classes = useStyles();
    return (
        <Card style={{ height: '10vh' }}  >
            <Typography >Footer</Typography>
        </Card>
    );
}


export default Footer;