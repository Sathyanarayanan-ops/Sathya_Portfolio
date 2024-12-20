import Logger from "../logger/Dotlog"
import LogDetail from "../LogDetail"
import Button from '@mui/material/Button';
import useStyles from "./styles";

export default function Homepage(){
    const classes = useStyles();
    return (
        <div>
            <Button className= {classes.sitename} variant="text">Logger</Button>
            <LogDetail/>
            <Logger />
        </div>
    )
}