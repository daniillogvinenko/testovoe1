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

    useEffect(() => {
        dispatch(getUsers(pageNumber));
    }, []);

    useEffect(() => {
        if (inView && !isLoading && hasMore) {
            dispatch(mainPageActions.setPage(pageNumber + 1));
            dispatch(getUsers(pageNumber + 1));
        }
    }, [inView]);

    const onSelect = (userNumber: number) => {
        if (userNumber === selected) {
            setSelected(-1);
        } else {
            setSelected(userNumber);
        }
    };

    return (
        <div className={classes.MainPage}>
            <div className="container">
                <div className={classes.content}>
                    {users.map((user, i) => (
                        <UserItem onSelect={onSelect} selected={selected === i} userNumber={i} key={i} user={user} />
                    ))}
                    {isLoading ? (
                        <>
                            <div className={classes.skeleton}></div>
                            <div className={classes.skeleton}></div>
                            <div className={classes.skeleton}></div>
                        </>
                    ) : null}
                    <div className={classes.ref} ref={ref}></div>
                </div>
            </div>
        </div>
    );
};
