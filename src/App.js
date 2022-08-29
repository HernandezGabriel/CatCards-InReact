import './App.css';
import CardSide from './components/CardSide';
import Collection from './components/Collection';
import React, {useEffect,useState} from "react";


function App() {
  const[collectionData, setCollectionData] = useState([])

  const fetchSaved = () => {
    fetch('http://localhost:8080/api/cards', {})

    .then((response)=>response.json())
    .then((actual)=> {
       setCollectionData(actual)
       console.log(actual)
    })
    }

    useEffect(fetchSaved, [])
  return (
    <div>
    <CardSide  updateCollections={fetchSaved} />
    <h2>Your Collection</h2>
    <Collection collectionData={collectionData} updateCollections={fetchSaved}/>
  </div>
  );
}

export default App;