import { createAppSlice } from "@/lib/createAppSlice";
import { IUser } from "@/lib/type";
import { getAllUsersAPI, getSingleUserAPI } from "./usersAPI";


const initialState:{users:IUser[], user: IUser} = {
    users: [],
    user: {} as IUser
}

export const usersSlice = createAppSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: (build) => {
        build.addCase(getAllUsersAPI.fulfilled, (state, action) => {
            state.users = action.payload
        }).addCase(getSingleUserAPI.fulfilled, (state, action) => {
            state.user = action.payload
        })
    }, 

    selectors: {
        selectUsers: (app) => app.users,
        selectUser: (app) => app.user
    }
})

export const {  } = usersSlice.actions;
export const { selectUsers, selectUser } = usersSlice.selectors;
