import {useState, useEffect} from 'react';

const initialFormValues ={fullname: "", phone_number: ""}

function Form({addContact, contacts}) {

    const [form, setform] = useState(initialFormValues);

    useEffect(() => {
        setform(initialFormValues);
    }, [contacts])

    const onChangeInput = (e) => {
        setform({...form, [e.target.name]: e.target.value})
    }

    const onSubmit = (e) => {
        e.preventDefault()

        if (form.fullname === '' || form.phone_number === ''){
            return false;
        }
        addContact([...contacts, form]);
    }

    return (
        <form>
            <div onSubmit={onSubmit}>
                <input name = "fullname" placeholder="Full Name" onChange={onChangeInput} value={form.fullname}></input>
            </div>
            
            <div>
                <input name = "phone_number" placeholder="Phone Number" onChange={onChangeInput} value ={form.phone_number}></input>
            </div>
            
            <div className="btn">
                <button>Add</button>
            </div>

        </form>
    )
}

export default Form
