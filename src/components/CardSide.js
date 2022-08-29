import React, {useEffect,useState} from "react";
import CatCard from './CatCard'

export default function CardSide(){
   const[catData, setCatData] = useState({})
   const[caption, setCaption] =  useState("")

   const newCard = () => {
      fetch('http://localhost:8080/api/cards/random', {})

      .then((response)=>response.json())
      .then((actual)=> setCatData(actual))
      .then(console.log(catData))

      }

   useEffect(newCard, [])

   const saveCard = () => {
      fetch("http://localhost:8080/api/cards",
         {
            method: 'POST',
            cache: 'no-cache',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(
            {
               catCardId: 80,
               catFact: "A cat's tongue has tiny barbs on it.",
               imgUrl: "https://cat-data.netlify.app/images/orange-and-white-cat-sleeping-in-yellow-blanket-600x600.jpg",
               caption: "caption254354"
           })


         }).then(response=>console.log(response))
         .catch(e=>console.log(e))
   }


   return (
      <div>
         <CatCard catFact={catData.catFact} imgUrl={catData.imgUrl}/>

         <input onChange={event => setCaption(event.target.value)}
            id="caption_box" type="text" placeholder="Caption me!"/>

         <div id="button_holder">

            <button onClick={saveCard}
               id="save_btn" type="button">&#128190; Save To Collection</button>

            <button onClick={newCard}
               id="next_btn" type="button">Get Next Card &#8680;</button>
        </div>


      </div>

)}