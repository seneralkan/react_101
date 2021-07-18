import {useFormik } from 'formik';
import './App.css';
import validationSchema from './components/validations';


function App() {
  const {handleChange, handleSubmit, handleBlur, values, errors, touched} = useFormik({
    initialValues: {
      firstName: "Sener",
      lastName: "Alkan",
      email: "seneralkan@gmail.com",
      gender: "male",
      hobbies: [],
      country: "",
      password: "",
      passwordConf: "",
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
    validationSchema,
  });
  return (
    <div className="App">
      <h1>Sign up</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor= "firstname">First Name:  </label>
        <input name="firstname" value ={values.firstName} onChange={handleChange}/>
        <br />
        <br />
        <label htmlFor="lastname">Last Name:  </label>
        <input name="lastname" value ={values.lastName} onChange={handleChange}/>
        <br />
        <br />
        <label htmlFor="email">Email:  </label>
        <input name="email" value ={values.email} onChange={handleChange} onBlur={handleBlur}/>
        
        {errors.email && touched.email && (<div className="error">{errors.email}</div>)}

        <br />
        <br />

        <label htmlFor="gender">Gender</label>
        <br />
        <br />

        <span>Male</span>
        <input type= "radio" name="gender" value= "male" onChange={handleChange} checked={values.gender === 'male'}></input>
        <span>Female</span>
        <input type="radio" name="gender" value= "female" onChange={handleChange} checked={values.gender === 'female'}></input>
        <br />
        <br />

        <div> 
          <input type="checkbox" name="hobbies" value="Football" onChange={handleChange}></input>
          Football
        </div>
        <div>
          <input type="checkbox" name="hobbies" value="Music" onChange={handleChange}></input>
          Music
        </div>
        <div>
          <input type="checkbox" name="hobbies" value="Photography" onChange={handleChange}></input>
          Photography
        </div>

        <br />
        <br />

        <select name="country" onChange={handleChange} value={values.country}>
          <option value="Turkey">Turkey</option>
          <option value="Canada">Canada</option>
          <option value="Netherlands">Netherlands</option>
        </select>

        <br />
        <br />
        
        <label htmlFor="password">Password:  </label>
        <input name="password" value ={values.password} onChange={handleChange} onBlur={handleBlur}/>
        {errors.password && touched.password && (<div className="error">{errors.password}</div>)}
        
        <br />
        <br />

        <label htmlFor="passwordConf">Password Confirmation:  </label>
        <input name="passwordConf" value ={values.passwordConf} onChange={handleChange} onBlur={handleBlur}/>
        {errors.passwordConf && touched.passwordConf && (<div className="error">{errors.passwordConf}</div>)}
        
        <br />
        <br />

        <button type="submit">Submit</button>
        <br />
        <br />
        <code>{JSON.stringify(values)}</code>
      </form>


    </div>
  );
}


export default App;