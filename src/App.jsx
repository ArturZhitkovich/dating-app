import React, {useState} from 'react';
import Users from "./components/Users";
import api from "./api";

const App = () => {
    const [users, setUsers] = useState(api.users.fetchAll());

    const handleDelete = (userId) => {
        setUsers(users.filter((user) => user._id !== userId));
    };

    const handleToggleBookMark = (id) => {
        const newUsers = users.map(user => {
            if (user._id === id) {
                user.bookmark = !user.bookmark;
            }
            return user;
        });
        setUsers(newUsers);
    };

    return (
        <Users
            users={users}
            onDelete={handleDelete}
            onToggleBookMark={handleToggleBookMark}/>
    );
};

export default App;