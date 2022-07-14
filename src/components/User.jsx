import React from 'react';
import Quality from "./Quality";
import Bookmark from "./Bookmark";

const User = ({user, onDelete, onToggleBookMark}) => {
    return (
        <tr>
            <td>{user.name}</td>
            <td>
                {user.qualities.map(quality => (
                    <Quality
                        _id={quality._id}
                        name={quality.name}
                        color={quality.color}
                        key={quality._id}/>
                ))}
            </td>
            <td>{user.profession.name}</td>
            <td>{user.completedMeetings}</td>
            <td>{user.rate} /5</td>
            <td>
                <Bookmark
                    onToggleBookMark={onToggleBookMark}
                    status={user.bookmark}
                    id={user._id}
                />
            </td>
            <td>
                <button
                    className="btn btn-danger"
                    onClick={() => onDelete(user._id)}
                >
                    delete
                </button>
            </td>
        </tr>
    );
};

export default User;