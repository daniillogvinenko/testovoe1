import { configureStore } from "@reduxjs/toolkit";
import { mainPageReducer } from "pages/MainPage/model/slices/mainPageSlice";

export const store = configureStore({
    reducer: {
        mainPage: mainPageReducer,
    },
    devTools: _IS_DEV_,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
