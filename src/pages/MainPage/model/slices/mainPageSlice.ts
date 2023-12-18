import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { type User, type MainPageSchema } from "../types/MainPageSchema";

const initialState: MainPageSchema = {
    isLoading: false,
    users: [],
    page: 1,
    hasMore: true,
};

export const mainPageSlice = createSlice({
    name: "dateDetailsPage",
    initialState,
    reducers: {
        setUsers: (state, action: PayloadAction<User[]>) => {
            state.users = [...state.users, ...action.payload];
        },
        setIsLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        setHasMore: (state, action: PayloadAction<boolean>) => {
            state.hasMore = action.payload;
        },
    },
});

export const { actions: mainPageActions, reducer: mainPageReducer } = mainPageSlice;
