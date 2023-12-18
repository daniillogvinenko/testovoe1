import { type StateSchema } from "app/providers/storeProvider";

export const getMainPageUsers = (state: StateSchema) => state?.mainPage?.users;
export const getMainPageIsLoading = (state: StateSchema) => state?.mainPage?.isLoading;
export const getMainPagePageNumber = (state: StateSchema) => state?.mainPage?.page;
export const getMainPageHasMore = (state: StateSchema) => state?.mainPage?.hasMore;
