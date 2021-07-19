import './App.css';
import {init} from './socketApi'
import {subscribe} from './socketApi'
import { useEffect, useState } from 'react';
import Palette from './components/Palette';

function App() {

  const [activecolor, setactivecolor] = useState('#282c34')
  
// setacivecolor i burada tanimlamammizin sebebi ise socketapi dosyasinda color i karsiliyoruz
// ve server ile orada iletsime geciyoruz

  useEffect(() => {
    init();
    subscribe((color) => {
      setactivecolor(color);
    });
  }, []);

  return (
    <div className="App" style={{backgroundColor: activecolor}}>
      <h1>{activecolor}</h1>
      <Palette activecolor={activecolor}/>
    </div>
  );
}

export default App;
