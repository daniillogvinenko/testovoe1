import { type User } from "pages/MainPage/model/types/MainPageSchema";
import classes from "./UserItem.module.scss";

interface UserItemProps {
    user: User;
    userNumber: number;
    selected: boolean;
    onSelect: (userNumber: number) => void;
}

export const UserItem = (props: UserItemProps) => {
    const { user, userNumber, selected, onSelect } = props;

    const userItemClassName = (selected: boolean) => {
        if (selected) {
            return `${classes.UserItem} ${classes.selectedItem}`;
        } else {
            return classes.UserItem;
        }
    };

    return (
        <div
            onClick={() => {
                onSelect(userNumber);
            }}
            className={userItemClassName(selected)}
        >
            <div className={classes.number}>{userNumber}</div>
            <div style={{ backgroundColor: user.color.toString() }} className={classes.avatar}></div>
            <div className={classes.info}>
                <div className={classes.name}>{user.name}</div>
                <div className={classes.timeAndSpeed}>
                    <div className={classes.time}>{user.time}</div>
                    <div className={classes.separator}></div>
                    <div className={classes.speed}>{user.speed} km/h</div>
                </div>
            </div>
        </div>
    );
};
