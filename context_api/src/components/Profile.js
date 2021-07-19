import {useContext, useState} from 'react'
import UserContext from '../context/UserContext'

function Profile() {

    const {user, setuser} = useContext(UserContext);

    const [loading, setloading] = useState(false)

    const handleLogin = () => {
        setloading(true)
        setTimeout(() => {
            setuser({id:1, username: "alkanse", bio: "lorem ipsul doler" })
            setloading(false)
        }, 1500);

    };

    const handleLogout = () => {
        setuser(null)
    };

    return (
        <div>
            {
                !user && 
                <button onClick={handleLogin}>{loading ? "Loading..." : "Login"}</button>
            }
            <br/><br/>
            <code>{JSON.stringify(user)}</code>
            <br/><br/>
            {
                user && <button onClick={handleLogout}>Log Out</button>
            }
        </div>
    )
}

export default Profile
