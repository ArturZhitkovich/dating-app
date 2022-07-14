import React from 'react';
import counterFriends from "../utils/counterFriends";

const SearchStatus = ({length}) => {
    return (
        <h2>
            <span
                className={"badge " + (length > 0 ? "bg-primary" : "bg-danger")}>
                {length > 0
                    ? counterFriends(length) + ' с тобой сегодня'
                    : "Никто с тобой не тусанет"
                }
                </span>
        </h2>
    );
};

export default SearchStatus;