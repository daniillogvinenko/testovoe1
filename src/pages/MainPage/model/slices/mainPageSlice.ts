import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { type User, type MainPageSchema } from "../types/MainPageSchema";

const initialState: MainPageSchema = {
    isLoading: false,
    users: [],
    page: 1,
};

export const mainPageSlice = createSlice({
    name: "dateDetailsPage",
    initialState,
    reducers: {
        setUsers: (state, action: PayloadAction<User[]>) => {
            state.users = action.payload;
        },
        setIsLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
    },
});

export const { actions: mainPageActions, reducer: mainPageReducer } = mainPageSlice;
