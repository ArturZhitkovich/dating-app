import React, {useState} from "react";
// импортируем API
import api from "../api/index"
// импортируем utils
import getBadgeClasses from "../utils/getBadgeClasses";
import counterFriends from "../utils/counterFriends";

// создаем компонент Users
const Users = () => {
    const [users, setUsers] = useState(api.users.fetchAll());
    const isHasUsers = users.length !==0;

    // удаляем user
    const handleDelete = (userId) => {
        setUsers(users => users.filter((user) => user._id !== userId));
    }

    // получаем качества user
    const userQualities = (user) => {
        return (
            <ul className="d-flex gap-3">
                {
                    user.qualities.map((quality) => (
                        <li key={quality._id}
                            className={`fw-bold text-white rounded-1 py-1 px-2 bg-` + quality.color}>
                            {quality.name}
                        </li>
                    ))
                }
            </ul>
        )
    }

    // рендерим строку user
    const renderRows = () => {
        return users.map((user) => (
            <tr key={user._id}>
                <td>{user.name}</td>
                <td>
                    {userQualities(user)}
                </td>
                <td>{user.profession.name}</td>
                <td>{user.completedMeetings}</td>
                <td>{user.rate + '/5'}</td>
                <td>
                    <button
                        id={user._id}
                        type="button"
                        className="btn btn-danger"
                        onClick={() => handleDelete(user._id)}>
                        Delete
                    </button>
                </td>
            </tr>))
    };

    return (
        <>
            <span className={getBadgeClasses(isHasUsers)}>{counterFriends(users.length)}</span>
            {isHasUsers &&
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Имя</th>
                            <th scope="col">Качества</th>
                            <th scope="col">Профессия</th>
                            <th scope="col">Встретился,раз</th>
                            <th scope="col">Оценка</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderRows()}
                    </tbody>
                </table>
            }
        </>
    )
}

export default Users;