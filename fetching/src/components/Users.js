import fetch from 'node-fetch';
import {useState, useEffect} from 'react';

function Users() {

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) =>res.json())
        .then((users) => setusers(users))
        .catch((e) => console.log(e))
        .finally(() => setisLoading(false))
    }, []);

    const [users, setusers] = useState([]);
    const [isLoading, setisLoading] = useState(true);

    return (
        <div>
            <h1>Users</h1>

            {isLoading &&  <div> Loading... </div>}            

            {users.map((user) => (
            <div key={user.id}> {user.name} </div>))}
        </div>
    )
}

export default Users;
