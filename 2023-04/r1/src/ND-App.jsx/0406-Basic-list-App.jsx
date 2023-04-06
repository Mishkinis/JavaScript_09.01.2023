import './App.scss';
import Dogs1 from './Components/01_NAMU_DARBAI/04-06/Dogs1';
import Dogs2 from './Components/01_NAMU_DARBAI/04-06/Dogs2';
import Dogs3 from './Components/01_NAMU_DARBAI/04-06/Dogs3';
import Dogs4 from './Components/01_NAMU_DARBAI/04-06/Dogs4';
import Dogs5 from './Components/01_NAMU_DARBAI/04-06/Dogs5';

function App() {
    const dogs = ['šuo', 'Šunius', 'Bobikas', 'kudlius', 'Šarikas', 'avigalvis'];

    const uzd4 = dogs
        .filter(dog => /^[A-Z + Š]/.test(dog) - 1)
        .map((dog, index) => <Dogs4 key={index} doggo={dog} />);

    return (
        <div className="App">
            <header className="App-header">
                <h5>Pirma užduotis</h5>
                <div className='squares'>
                    {
                        dogs.map((d, i) => <Dogs1 key={i} dog={d} />)
                    }
                </div>
                <h5>Antra užduotis</h5>
                <div className='circles'>
                    {
                        [...dogs].sort((a, b) => b.length - a.length).map((d, i) => <Dogs2 key={i} dogz={d} num={i + 1} />)
                    }

                </div>
                <h5>Trečia užduotis</h5>
                <div className='squares circles'>
                    {
                        dogs.map((d, i) => <Dogs3 key={i} god={d} index={i} />)
                    }
                </div>
                <h5>Ketvirta užduotis</h5>
                <div>{uzd4}</div>
                <h5>Penkta užduotis</h5>
                <div>
                    {
                        dogs.map((d, i) => <Dogs5 key={i} numbers={d.length} />)
                    }
                </div>
            </header>
        </div>
    );
}

export default App;