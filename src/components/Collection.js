import React, {useEffect,useState} from "react";
import CatCard from './CatCard'

function Collection() {
   const[collectionData, setCollectionData] = useState([])

   const fetchSaved = () => {
      fetch('http://localhost:8081/api/cards', {})

      .then((response)=>response.json())
      .then((actual)=> {
         setCollectionData(actual)
         console.log(actual)
      })


      }

   useEffect(fetchSaved, [])

   return (
      <div>

         {collectionData.map(catData=>{
            return(<CatCard key={catData.catCardId} catFact={catData.catFact} imgUrl={catData.imgUrl} caption={catData.caption}/>)
         })}
         </div>
   )


};

export default Collection;