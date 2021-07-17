import {useState, useEffect} from 'react'
import List from './List'
import Form from '../Form'
import './styles.css'

function Contacts() {
    
    const [contacts, setcontacts] = useState([
        {fullname: "Mehmet", 
        phone_number: "435352"},
        {fullname: "Justin",
        phone_number: "5236322"},
        {fullname: "Cassa",
        phone_number: "3532532"}]);

    useEffect(() => {
        console.log(contacts)
    }, [contacts])

    return (
        <div id="container">
            <h1 style={{color: "white"}}>Contacts</h1>
            <List contacts ={contacts} />
            <Form addContact = {setcontacts} contacts={contacts}/>
        </div>
    )
}

export default Contacts
