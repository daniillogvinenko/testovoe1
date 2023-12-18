import { type AppDispatch } from "app/providers/storeProvider/config/store";
// import { mainPageActions } from "../../slices/mainPageSlice";
import axios from "axios";
import { mainPageActions } from "../slices/mainPageSlice";
import { type User } from "../types/MainPageSchema";

export const getUsers = (pageNumber: number) => (dispatch: AppDispatch) => {
    dispatch(mainPageActions.setIsLoading(true));

    axios
        .get<User[]>(`${_API_}users?_limit=10&_page=${pageNumber}`)
        .then((response) => {
            dispatch(mainPageActions.setUsers(response.data));
            dispatch(mainPageActions.setIsLoading(false));
        })
        .catch((value) => {
            dispatch(mainPageActions.setIsLoading(false));
            alert("ERROR WHILE LOADING USERS :(");
        });
};
