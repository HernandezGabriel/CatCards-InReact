import logo from './logo.svg';
import './App.css';
import CatCard from './components/CatCard'
import CardSide from './components/CardSide';
import Collection from './components/Collection';

function App() {
  return (
    <div>
    <CardSide/>
    <h2>Your Collection</h2>
    <Collection/>
  </div>

  );
}

export default App;