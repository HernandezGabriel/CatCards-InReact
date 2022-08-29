import React, {useEffect,useState} from "react";
import CatCard from './CatCard'

export default function CardSide(){
   const[catData, setCatData] = useState({})
   const[caption, setCaption] =  useState("")

   const newCard = () => {
      fetch('http://localhost:8080/api/cards/random', {

      })

      .then((response)=>response.json())
      .then((actual)=> setCatData(actual))

      }

   useEffect(newCard, [])


   return (
      <div>
         <CatCard catFact={catData.catFact} imgUrl={catData.imgUrl}/>

         <input onChange={event => setCaption(event.target.value)}
            id="caption_box" type="text" placeholder="Caption me!"/>

         <div id="button_holder">
            <button id="save_btn" type="button">&#128190; Save To Collection</button>

            <button onClick={newCard}
               id="next_btn" type="button">Get Next Card &#8680;</button>
        </div>


      </div>

)}