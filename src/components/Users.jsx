import React, {useState} from "react";
// импортируем API
import api from "../api/index"

// создаем компонент Users
const Users = () => {
    const [users, setUsers] = useState(api.users.fetchAll());
    const [count, setCount] = useState(users.length)

    const handleDelete = (userId) => {
        setUsers(prevState => prevState.filter((user) => user._id !== userId));

        setCount(count -1)
    };

    const renderPhrase = () => {
        return count !== 0 ? <table className="table">
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
            {
                users.map((user) => (<tr key={user._id.toString()}>
                    <td>{user.name}</td>
                    <td>
                        <ul className="d-flex justify-content-between">
                            {user.qualities
                                .map((quality) => (
                                    <li key={quality._id}
                                        className={`fw-bold text-white rounded-1 py-1 px-2 bg-` + quality.color} >
                                        {quality.name}
                                    </li>
                                ))
                            }
                        </ul>
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
            }
            </tbody>
        </table> : false
    };


    const counterFriends = () => {

        const declination = (count % 10 >= 2 && count % 10 <=4) ? 'человека тусанут' : 'человек тусанет'

        return (
            count !== 0 ? <span> {count} {declination} с тобой сегодня</span> : <span>Никто с тобой не тусанет</span>
        )
    }

    const getBadgeClasses = () => {
        let classes = "fw-bold d-inline-block mt-2 p-2 text-white rounded-1 "
        return count !== 0 ? classes + "bg-primary" : classes + "bg-danger"
    }

    return (
        <>
            <span className={getBadgeClasses()}>{counterFriends()}</span>
            {renderPhrase()}
        </>
    );
}

export default Users;