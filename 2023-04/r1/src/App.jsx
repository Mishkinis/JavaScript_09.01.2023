import { useState } from 'react';
import './App.scss';
import Square from './Components/04-05/Square';

function App() {

    // const [count, setCount] = useState(0)
    // const [letter, setLetter] = useState('A')

    // const set0 = _ => {
    //     setCount(0); //NAUJAS PAPRASTAI
    // }

    // const plus1 = _ => {
    //     // setCount(count + 1) //IVYKSTA NE IS KARTO!!! (ziureti i console.log)
    //     // setCount(count + 1) //IVYKSTA NE IS KARTO!!! (ziureti i console.log)
    //     // setCount(count + 1) //IVYKSTA NE IS KARTO!!! (ziureti i console.log)

    //     setCount(c => c + 1) //REDAGAVIMAS TIK PER CALLBACK
    //     setCount(c => c + 1)
    //     setCount(c => c + 1)
    //     console.log('FUN:', count)
    // }
    const [sq, setSq] = useState([])
    const addSq = _ => {
        setSq(s => [...s, 'X']);
    };


    return (
        <div className="App">
            <header className="App-header">

                {/* {console.log('HTML:', count)}

                <div className="squares">
                    <Square number={count} />
                    <Square number={letter} />
                </div>
                <div className='squares'>
                    <button className='yellow' onClick={set0}>0</button>
                    <button className='pink' onClick={_ => setLetter(l => l === 'PINK' ? 'NOP' : 'PINK')}>PINK</button>
                    <button className='red' onClick={plus1}>+1</button>
                </div> */}
                <div className="squares">
                    {
                        sq.map((_, i) => <Square key={i} number={i} />)
                    }
                </div>
                <div className="squares">
                    <button className='green' onClick={addSq}>add[]</button>
                </div>
            </header>
        </div>
    );
}

export default App;