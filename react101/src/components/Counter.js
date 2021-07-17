import {useState, useEffect} from 'react';

// useEffect ile render edilen eventleri yakalamamizi sagliyor

function Counter(){
    const [count, setcount] = useState(0);

    // componenet dom a mount edildigi anda yakalamak icin
    // en sona dependency array olarak gecen bos array koyuyoruz
    // buda componenet mount edildiginde al anlamina geliyor
    useEffect(() => {
        console.log("Component mount edildi")

        const interval = setInterval(()=>{
            setcount((n)=>n+1)
        }, 1000);

        return () => clearInterval(interval)
    }, [count])
    
    useEffect(() => {
        console.log("State guncellendi")
    })


    const increase = () => (setcount(count + 1));
    const decrease = () => (setcount(count - 1))

    return (
        <div>
            <h1>Sayac</h1>
            <h2>{count}</h2>
            <button onClick= {increase}>Increase</button>
            <button onClick= {decrease}>Decrease</button>
        </div>
    );
}

export default Counter;