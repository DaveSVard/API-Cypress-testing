import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllUsersAPI = createAsyncThunk(
    "getAllUsers",
    async () => {
        const {data} = await axios.get("http://localhost:3000/api/users")
        return data.data    
    }
)

export const getSingleUserAPI = createAsyncThunk(
    "getSingleUsers",
    async (id:number) => {
        const {data} = await axios.get("http://localhost:3000/api/users/" + id)
        return data.data    
    }
)