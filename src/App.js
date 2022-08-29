import './App.css';
import CatCard from './components/CatCard'
import CardSide from './components/CardSide';
import Collection from './components/Collection';

function App() {
  return (
    <>
    <body>
    <h1 className = "CatCard">CatCard</h1>
      <CardSide/>
    <h2 className = "Collection Header">Your CatCard Collection</h2>
      <Collection/>
    </body>
    </>

  );
}

export default App;