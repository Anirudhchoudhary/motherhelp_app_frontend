import React from "react";

import { Alert } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { removemessage, selectMessage, selectSeverity } from "./customalertSlice";

function CustomAlert() {
    const message = useSelector(selectMessage);
    const severity = useSelector(selectSeverity);
    const dispatch = useDispatch()

    return (
        <React.Fragment>
            {console.log(severity  + message)}
            {message.length > 0 ?
            <Alert onClose={() => dispatch(removemessage())} severity={severity}>{message}</Alert> : '' }
        </React.Fragment>
    )
}

export default CustomAlert;