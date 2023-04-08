import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    severity : 'info',
    msg: '',
}

export const customalertSlice = createSlice({
    name: 'customalert',
    initialState,
    reducers: {
        setmessage: (state, action) => {
            state.msg = action.payload.message;
            state.severity = action.payload.severity;
        },
        removemessage: (state) => {
            state.msg = '';
            state.severity = '';
        },
    },
})

export const {setmessage, removemessage} = customalertSlice.actions;

export const selectMessage = (state) => state.customalert.msg;

export const selectSeverity = (state) => state.customalert.severity;

export default customalertSlice.reducer;