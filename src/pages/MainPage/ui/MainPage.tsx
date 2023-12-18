import { useSelector } from "react-redux";
import classes from "./MainPage.module.scss";
import { getMainPageIsLoading, getMainPagePageNumber, getMainPageUsers } from "../model/selectors/mainPageSelectors";
import { UserItem } from "entities/User";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../../../shared/lib/hooks/useAppDispatch/useAppDispatch";
import { getUsers } from "../model/services/getUsers";

export const MainPage = () => {
    const users = useSelector(getMainPageUsers);
    const isLoading = useSelector(getMainPageIsLoading);
    const pageNumber = useSelector(getMainPagePageNumber);
    const [selected, setSelected] = useState<number>();
    const dispatch = useAppDispatch();

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
                </div>
            </div>
        </div>
    );
};
