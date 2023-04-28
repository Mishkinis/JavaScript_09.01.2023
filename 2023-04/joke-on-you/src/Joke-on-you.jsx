import './App.scss';
import { Cont } from './Components/Context';
import Jokes from './Components/Jokes';

function App() {
    return (
        <Cont>
            <div>
                <h1 className='title' >Programming Joke Generator</h1>
                <Jokes />
            </div>
        </Cont>
    );
}
export default App;