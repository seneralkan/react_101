import {NavLink, Switch, Route, useRouteMatch} from 'react-router-dom'
import {useEffect, useState} from 'react'
import axios from 'axios'
import User from './User'

function Users() {

const [users, setusers] = useState([]);
const [isLoading, setisLoading] = useState(true);

const {path, url} = useRouteMatch();

useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
    .then((res) => setusers(res.data))
    .finally(() => setisLoading(false))
}, [])


    return (
        <div>
            <ul>
                {isLoading && <div>Loading...</div>}
                {
                     !isLoading && users.map((user => (
                        <li key={user.id}>
                            <NavLink activeStyle={{backgroundColor: "black", color: "#fff"}} to={`${url}/${user.id}`}>{user.name}</NavLink>
                        </li>
                    )))
                }
            </ul>

            <Switch>
                <Route exact path={path}>
                    <h3>Please select a user.</h3>
                </Route>
                <Route path={`${path}/:id`} component={User}></Route>
                </Switch>
        </div>
    )
}

export default Users
