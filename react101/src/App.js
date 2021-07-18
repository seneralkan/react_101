import './App.css';
import Header  from './components/Header';
import User from './components/Users';
import Counter from './components/Counter';
import A from './components/A';
import B from './components/B';
import {useState} from 'react';

//******************** NOTLAR ********************** */
// State: Degerinin degisme ihtimali olan verilerin tutuldugu js objesidir.
// useState hhok kullaranilarak tanimlanir.


function App() {
  const [isVisible, setIsVisible] = useState(true);
  const [name, setName] = useState("Sener");
  const [age, setaAge] = useState(29);
  const [friends, setFriends] = useState(["Melis", "Mehmet"]);
  const [address, setAddress] = useState({
    title: "Battalgazi/Malatya",
    zip: "44320"
  });

  return (
    <>
      <Header />
      < User  name = "Sener" surname="Alkan"  age = "26" 
      friends = {["Ahmet", "Melis", "Berkay", "Betul", "Gozde"]} address = {{
        title: "Battalgazi/Malatya",
        zip: 44320
      }}/>
      <p className = "xyz">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <label htmlFor = "myinput">
        Name
        <input id = "myinput"/>
      </label>

      <div>
        <h2>Merhaba {name} ({age}) !</h2>
        <button onClick={()=> setName("Selcuk")}>Change Name</button>
        <button onClick={()=> setaAge(53)}>Change Age</button>
      <br /><br />
      <hr/>
        <div>
          <h2>Friends</h2>
          {friends && 
          friends.map((friend, index) => (
            <div key={index}>{index} {friend}</div> 
          ))}
          <button onClick={()=> setFriends([...friends, "Ayse"])}>Add New Friends</button>
          <br /><br />
          <hr/>
          <h2>Address</h2>
          <div>{address.title} {address.zip}</div>
          <button onClick={() => setAddress({...address, title: "Kadikoy/Istanbul"})}>Change the Address</button>        

        </div>
        <div className= "App">
            {isVisible && <Counter />}
            <A />
            <B />
        </div>
        <div>

        </div>
      </div>
    </>
  );
}

export default App;
