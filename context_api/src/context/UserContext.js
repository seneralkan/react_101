import {createContext, useState} from 'react'
 
const UserContext = createContext();

export const UserProvider = ({children}) =>{

    const [user, setuser] = useState(null);

    const value = {user, setuser}

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export default UserContext;