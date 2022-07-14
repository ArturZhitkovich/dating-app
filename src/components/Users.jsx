import React, { useState } from "react";
import User from "./User";
import SearchStatus from "./SearchStatus";

const Users = ({users, onDelete, onToggleBookMark}) => {
    return (
        <>
            <SearchStatus length={users.length}/>
            {users.length > 0 && (
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">Имя</th>
                        <th scope="col">Качества</th>
                        <th scope="col">Профессия</th>
                        <th scope="col">Встретился, раз</th>
                        <th scope="col">Оценка</th>
                        <th scope="col">Избранное</th>
                        <th />
                    </tr>
                    </thead>
                    <tbody>
                    {users.map(user =>
                        <User user={user} onDelete={onDelete} onToggleBookMark={onToggleBookMark} key={user._id}/>
                    )}
                    </tbody>
                </table>
            )}
        </>
    );
};

export default Users;