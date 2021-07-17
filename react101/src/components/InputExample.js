import {useState} from 'react';

function InputExample() {
    //const [name, setname] = useState("Sener");
    //const [surname, setsurname] = useState("Alkan")

    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    
    // tek fonksiyon uzerinden degisiklikleri 
    //tanimlamak icin obje olarak name ve surname tanimladik
    const [form, setform] = useState({name: "", surname: ""});

   //const onChangeName = (event) => setname(event.target.value)
    //const onChangeSurname = (event) => setsurname(event.target.value)
    const onChangeInput = (e) => {
        setform({...form, [e.target.name]: e.target.value})
    }
    return (
        <div>
            Please enter name <br />
            <input name= "name" value ={form.name} onChange = {onChangeInput}/>
            <br />
            {form.name}
            <hr />
            Please enter surname <br />
            <input name= "surname" value ={form.surname} onChange = {onChangeInput}/>
            <br />
            {form.surname}
        </div>
    )
}

export default InputExample;
