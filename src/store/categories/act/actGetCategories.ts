import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "@api/index";
import axios from "axios";

type TRsponse = { id: number, title: string, prefix: string, img: string }[];

const actGetCategories = createAsyncThunk("categories/getCategories", async (_, {rejectWithValue}) => {
    try {
        const response = await api.get<TRsponse>("/categories");
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)){
            return rejectWithValue(error.response?.data.message)
        }
    }
});

export default actGetCategories;