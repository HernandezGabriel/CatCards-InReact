import React, {useEffect,useState} from "react";
import CatCard from './CatCard'

function Collection(props) {

   const updateCard = (event) => {
      }
   return (
      <div>

         {props.collectionData.map(catData=>{
            return(<CatCard updateCollections={props.updateCollections} key={catData.catCardId} id={catData.catCardId}catFact={catData.catFact} imgUrl={catData.imgUrl} caption={catData.caption}/>)
         })}
         </div>
   )


};

export default Collection;