import {useState} from 'react';
import {send} from '../socketApi'

function Palette({activecolor}) {
    const [color, setcolor] = useState('')

    return (
        <div className="palette">
            <input type="color" value={activecolor} onChange= {(e) => setcolor(e.target.value)}></input>
            <button onClick={()=> send(color)}>Click</button>
            <br />
            
        </div>
    )
}

export default Palette;
