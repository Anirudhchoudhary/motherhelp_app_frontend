import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { setCookie } from "../../setcookies"
import { logout } from "./userAPI"

const initialState = {
    accessToken: "",
    refreshToken: "",
    username: "",
    profile_picture: "",
    is_login: false,
    loading: false,
}

export const LogoutAsync = createAsyncThunk(
    'user/logout',
    async (userid) => {
        const response = await logout(userid);
        return response.data
    }
);

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setJwtToken: (state, action) => {
            state.accessToken = action.payload['access']
            state.refreshToken = action.payload['refresh']
            state.profile_picture = action.payload['display_photo']
            state.username = action.payload['username']
            setCookie("accessToken", action.payload['access'], 2*24*60*60);
            setCookie("RefreshToken", action.payload['refresh'], 4*24*60*60);
            state.is_login = true;
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(LogoutAsync.pending, (state) => {
                state.loading = true
            })
            .addCase(LogoutAsync.fulfilled, (state, action) => {
                console.log(state);
                console.log(action);
            });
    }
})

export const { setJwtToken } = userSlice.actions

export const authenticateStatus = (state) => state.user.is_login;
export const loadingStatus = (status) => status.user.is_login;

export default userSlice.reducer