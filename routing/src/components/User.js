import {useParams, Link} from 'react-router-dom';
import {useEffect, useState} from 'react'
import axios from 'axios';


function User() {
    const [isLoading, setisLoading] = useState(true);
    const [user, setuser] = useState({});
    const {id} = useParams();

    useEffect(() => {
        axios(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => setuser(res.data))
        .finally(() => setisLoading(false))
    }, [id]);
    
    return (
        <div>
            <h1>User Detail</h1>
            {isLoading && <div>Loading...</div>}
            <br/><br/>
            {!isLoading && <code>{JSON.stringify(user)}</code> }
            <br/><br/>
            <Link to= {`/users/${parseInt(id) + 1 }`}>Next User </Link>
        </div>
        
    )
}

export default User;
