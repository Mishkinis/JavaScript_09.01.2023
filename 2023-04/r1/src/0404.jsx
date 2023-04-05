import './App.css';
import './Components/04-04_React_pradzia/animal.scss';
import Fox from './Components/04-04_React_pradzia/Fox';
import Racoon from './Components/04-04_React_pradzia/Racoon';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <h1>START</h1>

        <Racoon />
        <Fox />

      </header>
    </div>
  );
}

export default App;