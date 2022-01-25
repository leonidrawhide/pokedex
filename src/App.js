import { Route, Routes } from 'react-router-dom';
import './App.css';
import './components/styles.css'
import PokeList from './components/PokeList';
import PokeNavBar from './components/PokeNavBar';
import PokemonPage from './components/PokemonPage';
import PokeAbout from './components/PokeAbout';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={ <PokeNavBar /> }>
          <Route index element={ <PokeList /> } />
          <Route path={':id'} element={ <PokemonPage /> } />
          <Route path={'about'} element={ <PokeAbout /> } />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

