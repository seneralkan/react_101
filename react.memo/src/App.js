
import './App.css';
import {useState, useCallback} from 'react'
import Header from './components/Header';


//Her butona basildiginda ilgili return icerisnde bulunan 
// kod blogu tekrar caisiyor. Bu nedenle header kismida her butona basildiginda re-render ediliyor
// Bunun onune gecmek icin header.js icerisinde react.memo ile export islemi yapiyoruz.
// Header tag icerisinde herangi bir prop da eger degisme var ise re-render edilir.



function App() {

  const [number, setnumber] = useState(0);

  // const data = useMemo(()=>{
  //   return {name: "Sener"}
  // }, [])

  const increment = useCallback(() => {
    setnumber((prevState) => prevState +1)
  }, [])

  return (
    <div className="App">
      <Header increment={increment}/>
      <hr />
      <h1>{number}</h1>
      
    </div>
  );
}

export default App;
