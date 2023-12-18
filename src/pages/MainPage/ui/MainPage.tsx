import { useSelector } from "react-redux";
import classes from "./MainPage.module.scss";
import {
    getMainPageHasMore,
    getMainPageIsLoading,
    getMainPagePageNumber,
    getMainPageUsers,
} from "../model/selectors/mainPageSelectors";
import { UserItem } from "entities/User";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../../../shared/lib/hooks/useAppDispatch/useAppDispatch";
import { getUsers } from "../model/services/getUsers";
import { useInView } from "react-intersection-observer";
import { mainPageActions } from "../model/slices/mainPageSlice";

export const MainPage = () => {
    const users = useSelector(getMainPageUsers);
    const isLoading = useSelector(getMainPageIsLoading);
    const pageNumber = useSelector(getMainPagePageNumber);
    const hasMore = useSelector(getMainPageHasMore);
    const { ref, inView, entry } = useInView({});
    const [selected, setSelected] = useState<number>();
    const dispatch = useAppDispatch();

    if (inView && !isLoading && hasMore) {
        dispatch(mainPageActions.setPage(pageNumber + 1));
        dispatch(getUsers(pageNumber + 1));
    }

    useEffect(() => {
        dispatch(getUsers(pageNumber));
    }, [dispatch]);

    const onSelect = (userNumber: number) => {
        if (userNumber === selected) {
            setSelected(-1);
        } else {
            setSelected(userNumber);
        }
    };

    if (isLoading) {
        return (
            <div className={classes.MainPage}>
                <div className="container">
                    <div className={classes.content}>LOADING USERS...</div>
                </div>
            </div>
        );
    }

    return (
        <div className={classes.MainPage}>
            <div className="container">
                <div className={classes.content}>
                    {users.map((user, i) => (
                        <UserItem onSelect={onSelect} selected={selected === i} userNumber={i} key={i} user={user} />
                    ))}
                    <h1 ref={ref}>ELEMENT</h1>
                </div>
            </div>
        </div>
    );
};
