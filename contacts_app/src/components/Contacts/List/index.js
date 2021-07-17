import {useState} from 'react';


function List({contacts}) {
    
    const [filterText, setfilterText] = useState('');
    const onChange = ((e) => setfilterText(e.target.value));
    const filtered = contacts.filter((item) => {
        return Object.keys(item).some((key) => {
            return item[key].toString().toLowerCase().includes(filterText.toLocaleLowerCase())
        });
    });

    return (
        <div>

            <input placeholder="Filter Contacts" value={filterText} onChange={onChange}/>
            <ul className="list">
                {
                    filtered.map((contact, i) => 
                    <li key= {i}>
                        <span>Name: {contact.fullname}</span>
                        <span>Phone Number: {contact.phone_number}</span>
                    </li>)
                }
            </ul>
            <p>
                Total Contacts ({filtered.length})
            </p>
        </div>
    )
}

export default List
